import PaymentStatistics from "@/components/statistics/PaymentStatistics";
import StatisticsHeading from "@/components/statistics/StatisticsHeading";
import UserStatistics from "@/components/statistics/UserStatistics";

const StatisticsView = () => {
  return (
    <div className="w-full">
      <StatisticsHeading />
      <div className="flex items-center justify-start  gap-[20px]">
        <PaymentStatistics />
        <UserStatistics />
      </div>
    </div>
  );
};

export default StatisticsView;
