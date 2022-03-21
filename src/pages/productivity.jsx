import useSWR from "swr"

import { ActionBarChart } from "../components/articles/productivity"

export default function ProductivityPage({ me }) {
  const { data: statistics } = useSWR("/productivity/statistics/")

  return (
    <main>
      {statistics && <ActionBarChart data={statistics} />}
    </main>
  )
}
