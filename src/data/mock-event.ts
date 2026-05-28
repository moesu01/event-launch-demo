import type { MockEvent, TicketSalesDataPoint } from "../types/event"

export const LIVE_METRICS = {
  sales: "$0.00",
  totalTickets: "0 / 300",
  boxOfficeCash: "$0.00",
  refunds: "$0.00",
  disputes: "$0.00",
  discounts: "$0.00",
  payoutBalance: "$0.00",
  holdBalance: "$0.00",
  attendanceTotal: "0",
  ticketBuyers: "0",
  guestlist: "0",
}

export const ticketSalesData: TicketSalesDataPoint[] = [
  { date: "Jan 29", sales: 0 },
  { date: "Feb 2", sales: 0 },
  { date: "Feb 5", sales: 0 },
  { date: "Feb 8", sales: 0 },
  { date: "Feb 12", sales: 0 },
  { date: "Feb 16", sales: 0 },
  { date: "Feb 20", sales: 0 },
  { date: "Feb 24", sales: 0 },
  { date: "Feb 28", sales: 0 },
  { date: "Mar 4", sales: 0 },
  { date: "Mar 7", sales: 0 },
  { date: "Mar 11", sales: 0 },
  { date: "Mar 15", sales: 0 },
  { date: "Mar 19", sales: 0 },
  { date: "Mar 25", sales: 0 },
]

export const mockEvent: MockEvent = {
  title: "Jams: A Late 90's + 2000's R&B, Pop, and Hip-Hop Party",
  tags: ["Jams", "Party"],
  venueName: "Le Poisson Rouge",
  venueAddress:
    "158 Bleecker St, New York City, New York 10012, United States",
  datetime: "Fri, Apr 10 at 11:00PM — 4:00AM",
  imageGradient: "linear-gradient(135deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)",
  metrics: LIVE_METRICS,
  ticketSales: ticketSalesData,
  timeline: [
    {
      emoji: "📢",
      title: "Announce on",
      datetime: "Wed Jan 29 09:00AM",
      subtitle: "2 months before the event starts.",
    },
    {
      emoji: "💰",
      title: "On sale",
      datetime: "Wed Jan 29 10:00AM",
      subtitle: "2 months before the event starts.",
    },
    {
      emoji: "🎬",
      title: "Event start",
      datetime: "Tue Mar 25 07:30PM",
    },
    {
      emoji: "🛑",
      title: "Off sale",
      datetime: "Tue Mar 25 11:00PM",
      subtitle: "4 hours after the event starts.",
    },
    {
      emoji: "🏁",
      title: "Event end",
      datetime: "Tue Mar 25 10:30PM",
      subtitle: "3 hours after the event starts.",
    },
  ],
  performers: [
    {
      name: "Honey Revenge",
      instagram: "208.3K",
      spotify: "539K",
      tiktok: "161.5K",
      avatarGradient: "linear-gradient(135deg, #553c9a 0%, #b794f4 100%)",
      isHeadliner: true,
    },
    {
      name: "Daisy Grenade",
      instagram: "124.3K",
      spotify: "148.5K",
      tiktok: "109.3K",
      avatarGradient: "linear-gradient(135deg, #c53030 0%, #f6ad55 100%)",
    },
    {
      name: "nightlife",
      instagram: "0",
      spotify: "64.2K",
      avatarGradient: "linear-gradient(135deg, #2c5282 0%, #63b3ed 100%)",
    },
    {
      name: "Vana",
      instagram: "261.4K",
      spotify: "731K",
      tiktok: "910.2K",
      avatarGradient: "linear-gradient(135deg, #234e52 0%, #81e6d9 100%)",
    },
  ],
  genres: ["Soul", "RnB", "Rhythm and Blues", "Hip Hop"],
  description:
    "Honey Revenge - The Loving and Losing Tour w/ Daisy Grenade, + Vana - Live at LPR on Tuesday, June 17th, 2025\n6:00 PM doors | 7:00 PM show (16+)\nMore shows at http://LPR.com\nSign up for our newsletter at http://bit.ly/LPR-newsletter\nWhen an event sells out, fans who missed out on tickets can join the Waitlist for a chance to purchase tickets from someone who can no longer attend. Joining the Waitlist does NOT guarantee entry to the event, please do NOT arrive at the venue unless you are contacted about tickets becoming available.",
}
