import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Daily Log", path: "/daily-log" },
  { name: "Analytics", path: "/analytics" },
  { name: "Goals", path: "/goals" },
  { name: "Weight", path: "/weight" },
  { name: "Settings", path: "/settings" },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
        />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 border-r bg-white p-6 transition-transform duration-200 md:block md:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">
              ALI<span className="text-blue-600">FIT</span>
            </h1>

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 hover:bg-gray-100 md:hidden"
              aria-label="Close navigation"
            >
              ✕
            </button>
          </div>

          <nav className="mt-8 space-y-2">
            {navigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={onClose}
                className={({ isActive }) =>
                  `block rounded-lg px-4 py-3 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>
    </>
  );
}