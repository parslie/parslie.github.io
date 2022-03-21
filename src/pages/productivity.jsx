import { ActionBarChart } from "../components/articles/productivity"

export default function ProductivityPage({ me }) {
  const mockProductivityStats = {
    day_count: 14,
    max_duration: 60*30,
    categories: [
      {
        name: "Cleaning",
        color: "red",
        durations: [0, 0, 30*2, 60*4, 0, 0, 60*4, 0, 60*3, 0, 0, 60*3, 0, 0],
      },
      {
        name: "Socializing",
        color: "green",
        durations: [0, 0, 30*5, 60, 0, 40*3, 60*4, 0, 60*3, 0, 0, 60*6, 60*2, 0],
      },
      {
        name: "Studying",
        color: "blue",
        durations: [60*20, 0, 30*10, 60*2, 50*6, 40*3, 60*2, 0, 60*6, 0, 0, 0, 60*10, 0],
      },
    ],
  }

  return (
    <main>
      <ActionBarChart data={mockProductivityStats} />
    </main>
  )
}
