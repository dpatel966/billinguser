const pool = require("../dbconfig/db");

class BillingController {

  static async billingSummary(id) {
    try {
      const userId = id;

      const [planData] = await pool.query(
        `SELECT 
            s.plan_id,
            p.plan_name,
            p.monthyqouta,
            p.extara_charge
         FROM subscriptions s
         JOIN plans p ON s.plan_id = p.id
         WHERE s.user_id = ? 
           AND s.isActive = 1`,
        [userId]
      );

      if (planData.length === 0) {
        return res.status(404).json({ message: "No active plan found" });
      }

      const plan = planData[0];

      const [usageData] = await pool.query(
  `SELECT 
      COALESCE(SUM(used_unit), 0) AS totalUsed
   FROM usagerecords
   WHERE user_id = ?
     AND createdAt >= DATE_FORMAT(CURRENT_DATE(), '%Y-%m-01')
     AND createdAt < DATE_FORMAT(DATE_ADD(CURRENT_DATE(), INTERVAL 1 MONTH), '%Y-%m-01')`,
  [userId]
);


      const totalUsed = usageData[0].totalUsed;

      let extraUnits = 0;
      let extraCharges = 0;

      if (totalUsed > plan.monthyqouta) {
        extraUnits = totalUsed - plan.monthyqouta;
        extraCharges = extraUnits * plan.extara_charge;
      }

      return {
        userId: userId,
        plan: {
          plan_name: plan.plan_name,
          monthlyQuota: plan.monthyqouta,
          extraChargePerUnit: plan.extara_charge
        },
        usage: {
          totalUsed,
          extraUnits,
          extraCharges
        }
      };

    } catch (err) {
return err
    }
  }
}

module.exports = BillingController;
