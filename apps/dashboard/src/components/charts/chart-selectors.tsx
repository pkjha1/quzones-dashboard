import { ChartPeriod } from "@/components/charts/chart-period";
import { ChartType } from "@/components/charts/chart-type";
import { startOfMonth, startOfYear, subMonths } from "date-fns";
import { cookies } from "next/headers";

export async function ChartSelectors({ range, defaultRange }) {
  const chartType = cookies().get("chart-type")?.value ?? "revenue";

  return (
    <div className="flex justify-between mt-6">
      <ChartType initialValue={chartType} />
      <ChartPeriod initialValue={range} defaultRange={defaultRange} />
    </div>
  );
}
