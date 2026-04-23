import {
  CalendarDays,
  Users,
  UserCog,
  Scissors,
  ReceiptText,
  TrendingUp,
  BrainCircuit,
  AlertTriangle,
  Clock3,
  CheckCircle2,
  Sparkles,
  DollarSign,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const revenueData = [
  { day: "Mon", value: 45 },
  { day: "Tue", value: 60 },
  { day: "Wed", value: 52 },
  { day: "Thu", value: 75 },
  { day: "Fri", value: 92 },
  { day: "Sat", value: 110 },
  { day: "Sun", value: 70 },
];

const todayAppointments = [
  {
    time: "09:00 AM",
    customer: "Nethmi Perera",
    service: "Hair Cut & Styling",
    staff: "Kavindi Silva",
    status: "Confirmed",
  },
  {
    time: "10:30 AM",
    customer: "Sanduni Fernando",
    service: "Hair Coloring",
    staff: "Nethmi Perera",
    status: "In Progress",
  },
  {
    time: "12:00 PM",
    customer: "Tharushi Jayasekara",
    service: "Facial Treatment",
    staff: "Piumi Silva",
    status: "Pending",
  },
  {
    time: "02:15 PM",
    customer: "Ama Peries",
    service: "Bridal Package",
    staff: "Kavindi Silva",
    status: "Confirmed",
  },
];

const staffAvailability = [
  { name: "Kavindi Silva", role: "Senior Stylist", status: "Available" },
  { name: "Nethmi Perera", role: "Color Specialist", status: "Busy" },
  { name: "Piumi Silva", role: "Beautician", status: "Available" },
  { name: "Tharushi Jayasekara", role: "Receptionist", status: "On Leave" },
];

const topServices = [
  { name: "Hair Cut & Styling", bookings: 124, revenue: "$2,480" },
  { name: "Hair Coloring", bookings: 82, revenue: "$4,920" },
  { name: "Facial Treatment", bookings: 67, revenue: "$2,680" },
  { name: "Bridal Package", bookings: 18, revenue: "$2,700" },
];

const aiInsights = [
  {
    title: "Revenue Growth",
    description:
      "This week’s revenue is 18% higher than last week, driven by hair coloring and bridal packages.",
    tone: "success",
  },
  {
    title: "Peak Booking Hours",
    description:
      "Friday evening and Saturday morning remain the busiest time slots. Consider adding one more stylist.",
    tone: "info",
  },
  {
    title: "Low Demand Alert",
    description:
      "Tuesday afternoon has the lowest bookings. A midweek promotion could improve slot utilization.",
    tone: "warning",
  },
];

const quickActions = [
  "Add New Appointment",
  "Create Invoice",
  "Register Customer",
  "Add New Service",
];

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
          <p className="mt-2 text-sm text-gray-500">
            Monitor salon performance, appointments, staff, revenue, and AI-powered business analysis.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {quickActions.map((action) => (
            <button
              key={action}
              className="rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-blue-600 hover:text-white"
            >
              {action}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today’s Revenue</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">$1,250</h2>
              <p className="mt-1 text-xs font-medium text-green-600">+12.4%</p>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Appointments</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">18</h2>
              <p className="mt-1 text-xs font-medium text-blue-600">4 upcoming</p>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">248</h2>
              <p className="mt-1 text-xs font-medium text-purple-600">32 new this month</p>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Staff Active</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">12</h2>
              <p className="mt-1 text-xs font-medium text-amber-600">2 on leave</p>
            </div>
            <div className="rounded-xl bg-amber-100 p-3 text-amber-600">
              <UserCog className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Top Service</p>
              <h2 className="mt-2 text-xl font-bold text-gray-800">Hair Cut</h2>
              <p className="mt-1 text-xs font-medium text-pink-600">124 bookings</p>
            </div>
            <div className="rounded-xl bg-pink-100 p-3 text-pink-600">
              <Scissors className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 space-y-6">
          <div className="rounded-2xl bg-gradient-to-r from-slate-900 via-blue-900 to-violet-900 p-6 text-white shadow-sm">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-cyan-200">
                  <BrainCircuit className="h-4 w-4" />
                  AI Business Analyzer
                </div>

                <h2 className="mt-4 text-2xl font-bold">Salon performance summary</h2>
                <p className="mt-3 text-sm leading-7 text-slate-200">
                  AI detected strong growth in high-value services and recurring customers.
                  Weekend capacity is nearing its limit, while midweek afternoon bookings remain underutilized.
                </p>

                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                    Revenue up 18%
                  </span>
                  <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-300">
                    Repeat visits rising
                  </span>
                  <span className="rounded-full bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-300">
                    Tuesday slots underbooked
                  </span>
                </div>
              </div>

              <div className="grid min-w-[220px] grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs text-slate-200">Predicted Peak Day</p>
                  <h3 className="mt-2 text-lg font-semibold">Saturday</h3>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs text-slate-200">AI Confidence</p>
                  <h3 className="mt-2 text-lg font-semibold">92%</h3>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs text-slate-200">Risk Alert</p>
                  <h3 className="mt-2 text-lg font-semibold">Low</h3>
                </div>
                <div className="rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-xs text-slate-200">Next Action</p>
                  <h3 className="mt-2 text-lg font-semibold">Promote Tuesday</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-gray-800">Revenue Overview</h2>
                <p className="text-sm text-gray-500">Weekly revenue performance</p>
              </div>
              <div className="rounded-xl bg-gray-100 px-3 py-2 text-sm font-medium text-gray-700">
                This Week
              </div>
            </div>

            <div className="flex h-72 items-end gap-3">
              {revenueData.map((item) => (
                <div key={item.day} className="flex flex-1 flex-col items-center justify-end">
                  <div className="mb-3 text-xs font-medium text-gray-500">{item.value}%</div>
                  <div
                    className="w-full rounded-t-2xl bg-gradient-to-t from-blue-600 to-cyan-400"
                    style={{ height: `${item.value * 2}px` }}
                  />
                  <div className="mt-3 text-sm font-medium text-gray-600">{item.day}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-800">Today’s Appointments</h2>
              <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead>
                  <tr className="border-b text-gray-500">
                    <th className="px-3 py-3 font-medium">Time</th>
                    <th className="px-3 py-3 font-medium">Customer</th>
                    <th className="px-3 py-3 font-medium">Service</th>
                    <th className="px-3 py-3 font-medium">Staff</th>
                    <th className="px-3 py-3 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {todayAppointments.map((appointment) => (
                    <tr
                      key={`${appointment.customer}-${appointment.time}`}
                      className="border-b last:border-b-0"
                    >
                      <td className="px-3 py-4 font-medium text-gray-800">{appointment.time}</td>
                      <td className="px-3 py-4 text-gray-700">{appointment.customer}</td>
                      <td className="px-3 py-4 text-gray-600">{appointment.service}</td>
                      <td className="px-3 py-4 text-gray-600">{appointment.staff}</td>
                      <td className="px-3 py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            appointment.status === "Confirmed"
                              ? "bg-green-100 text-green-600"
                              : appointment.status === "In Progress"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {appointment.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-violet-600" />
              <h2 className="text-xl font-bold text-gray-800">AI Insights</h2>
            </div>

            <div className="space-y-4">
              {aiInsights.map((insight) => (
                <div
                  key={insight.title}
                  className={`rounded-2xl border p-4 ${
                    insight.tone === "success"
                      ? "border-green-100 bg-green-50"
                      : insight.tone === "warning"
                      ? "border-yellow-100 bg-yellow-50"
                      : "border-blue-100 bg-blue-50"
                  }`}
                >
                  <h3 className="text-sm font-semibold text-gray-800">{insight.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <UserCog className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Staff Availability</h2>
            </div>

            <div className="space-y-3">
              {staffAvailability.map((staff) => (
                <div
                  key={staff.name}
                  className="flex items-center justify-between rounded-xl border border-gray-100 p-3"
                >
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{staff.name}</p>
                    <p className="text-xs text-gray-500">{staff.role}</p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      staff.status === "Available"
                        ? "bg-green-100 text-green-600"
                        : staff.status === "Busy"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {staff.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-pink-600" />
              <h2 className="text-xl font-bold text-gray-800">Popular Services</h2>
            </div>

            <div className="space-y-4">
              {topServices.map((service, index) => (
                <div key={service.name} className="rounded-xl border border-gray-100 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-gray-800">
                      {index + 1}. {service.name}
                    </p>
                    <span className="text-sm font-bold text-blue-600">{service.revenue}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                    <span>{service.bookings} bookings</span>
                    <span className="flex items-center gap-1 text-green-600">
                      <TrendingUp className="h-3.5 w-3.5" />
                      Trending
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
              <h2 className="text-xl font-bold text-gray-800">Alerts & Recommendations</h2>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl bg-amber-50 p-4">
                <p className="text-sm font-semibold text-amber-700">Low booking window</p>
                <p className="mt-1 text-sm text-amber-700/90">
                  Tuesday 2 PM - 5 PM has low occupancy. Create a discount campaign.
                </p>
              </div>

              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-sm font-semibold text-green-700">High-value service trend</p>
                <p className="mt-1 text-sm text-green-700/90">
                  Bridal packages are generating strong revenue with fewer appointments.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm font-semibold text-blue-700">Suggested next step</p>
                <p className="mt-1 text-sm text-blue-700/90">
                  Add one more staff member to Saturday morning shifts for better service flow.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <ReceiptText className="h-5 w-5 text-emerald-600" />
              <h2 className="text-xl font-bold text-gray-800">Today’s Summary</h2>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Completed Services</span>
                <span className="font-semibold text-gray-800">11</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Pending Invoices</span>
                <span className="font-semibold text-gray-800">4</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Walk-in Customers</span>
                <span className="font-semibold text-gray-800">6</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Average Wait Time</span>
                <span className="font-semibold text-gray-800">12 mins</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-500">Customer Satisfaction</span>
                <span className="inline-flex items-center gap-1 font-semibold text-green-600">
                  <CheckCircle2 className="h-4 w-4" />
                  4.8/5
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-gray-800">AI Recommendation Board</h2>
            <p className="text-sm text-gray-500">
              Suggested actions based on booking, revenue, and customer behavior
            </p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200">
            View Full Report
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2">
              <Clock3 className="h-5 w-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-gray-800">Schedule Optimization</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Move one stylist from low-demand Tuesday afternoon to Friday evening to reduce customer wait time.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2">
              <Scissors className="h-5 w-5 text-pink-600" />
              <h3 className="text-lg font-semibold text-gray-800">Service Promotion</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Promote facial treatment with a weekday offer because it has stable conversion but lower booking frequency.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 p-5">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-800">Customer Retention</h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Send follow-up offers to customers who visited once in the last 30 days but did not rebook.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;