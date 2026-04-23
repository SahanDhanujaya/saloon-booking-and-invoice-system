import {
  User,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  CalendarDays,
  Briefcase,
  Camera,
  Lock,
} from "lucide-react";

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Profile</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage your personal information, account settings, and security.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="space-y-6 xl:col-span-1">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="flex flex-col items-center text-center">
              <div className="relative">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
                <button className="absolute bottom-0 right-0 rounded-full bg-blue-600 p-2 text-white shadow-md hover:bg-blue-700">
                  <Camera className="h-4 w-4" />
                </button>
              </div>

              <h2 className="mt-4 text-xl font-bold text-gray-800">
                Sahan Dhanujaya
              </h2>
              <p className="text-sm text-blue-600">Salon Administrator</p>

              <div className="mt-4 w-full rounded-xl bg-gray-50 p-4 text-left">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>sahan@example.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>+94 77 123 4567</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>Colombo, Sri Lanka</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <span>Admin / Manager</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Account Summary
            </h2>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Account Status</span>
                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                  Active
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span>Role</span>
                <span className="font-semibold text-gray-800">Administrator</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Joined</span>
                <span className="font-semibold text-gray-800">Jan 12, 2026</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Last Login</span>
                <span className="font-semibold text-gray-800">Today, 9:15 AM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6 xl:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <h2 className="mb-5 text-xl font-bold text-gray-800">
              Personal Information
            </h2>

            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  First Name
                </label>
                <input
                  type="text"
                  defaultValue="Sahan"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Last Name
                </label>
                <input
                  type="text"
                  defaultValue="Dhanujaya"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Email Address
                </label>
                <input
                  type="email"
                  defaultValue="sahan@example.com"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="text"
                  defaultValue="+94 77 123 4567"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Job Title
                </label>
                <input
                  type="text"
                  defaultValue="Salon Administrator"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Location
                </label>
                <input
                  type="text"
                  defaultValue="Colombo, Sri Lanka"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Bio
                </label>
                <textarea
                  rows={4}
                  defaultValue="Responsible for managing salon operations, appointments, staff workflow, invoices, and daily business reporting."
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <Lock className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-bold text-gray-800">Change Password</h2>
            </div>

            <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="md:col-span-2">
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="Enter current password"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Confirm Password
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-gray-800 px-6 py-3 text-sm font-medium text-white hover:bg-gray-900"
                >
                  Update Password
                </button>
              </div>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <h2 className="text-xl font-bold text-gray-800">Security & Access</h2>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Two-Factor Auth</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">Disabled</h3>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Role Access</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">Full Admin</h3>
              </div>

              <div className="rounded-xl bg-gray-50 p-4">
                <p className="text-sm text-gray-500">Account Created</p>
                <h3 className="mt-2 text-lg font-semibold text-gray-800">2026-01-12</h3>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center gap-2">
              <CalendarDays className="h-5 w-5 text-violet-600" />
              <h2 className="text-xl font-bold text-gray-800">Recent Activity</h2>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-medium text-gray-800">
                  Logged into the admin dashboard
                </p>
                <p className="mt-1 text-xs text-gray-500">Today, 9:15 AM</p>
              </div>

              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-medium text-gray-800">
                  Updated salon report settings
                </p>
                <p className="mt-1 text-xs text-gray-500">Yesterday, 4:20 PM</p>
              </div>

              <div className="rounded-xl border border-gray-100 p-4">
                <p className="text-sm font-medium text-gray-800">
                  Created a new invoice
                </p>
                <p className="mt-1 text-xs text-gray-500">Yesterday, 1:10 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;