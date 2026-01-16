import React from "react";

/**
 * Responsive Table Wrapper Component
 * Converts grid-based tables to mobile-friendly card layout on small screens
 * Usage: Wrap your table rows in this component
 */
const ResponsiveTable = ({
  headers = [],
  children,
  className = "",
  responsive = true,
}) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}
    >
      {/* Desktop View - Table */}
      <div className="hidden sm:block w-full overflow-x-auto">
        <div className="grid gap-0 min-w-full">
          {/* Header */}
          {headers.length > 0 && (
            <div className="grid gap-0 bg-gray-50 border-b sticky top-0 z-10">
              {headers.map((header, idx) => (
                <div
                  key={idx}
                  className={`px-3 sm:px-4 md:px-6 py-3 text-xs sm:text-sm font-semibold text-gray-700 ${
                    header.className || ""
                  }`}
                  style={header.style}
                >
                  {header.label}
                </div>
              ))}
            </div>
          )}
          {/* Rows */}
          <div className="divide-y">{children}</div>
        </div>
      </div>

      {/* Mobile View - Cards */}
      <div className="sm:hidden divide-y">{children}</div>
    </div>
  );
};

/**
 * Responsive Table Row Component
 * Automatically adapts between table row (desktop) and card (mobile)
 */
export const ResponsiveTableRow = ({
  data = {},
  children,
  className = "",
  desktopGridCols = "auto",
}) => {
  return (
    <>
      {/* Desktop Row */}
      <div
        className={`hidden sm:grid gap-0 items-start border-b hover:bg-gray-50 transition-colors last:border-b-0 ${className}`}
        style={{
          gridTemplateColumns: desktopGridCols,
        }}
      >
        {children}
      </div>

      {/* Mobile Card */}
      <div className="sm:hidden bg-white p-4 space-y-3">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="flex justify-between items-start text-sm">
            <span className="font-semibold text-gray-600 capitalize">
              {typeof value === "string"
                ? value.split(" ").slice(0, 2).join(" ")
                : key}
              :
            </span>
            <span className="text-gray-900 text-right ml-2 flex-1">
              {value}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

/**
 * Responsive Table Cell Component
 * Automatically hides on mobile if specified
 */
export const ResponsiveTableCell = ({
  children,
  hideMobile = false,
  className = "",
  align = "left",
}) => {
  return (
    <div
      className={`px-3 sm:px-4 md:px-6 py-3 text-sm text-gray-900 ${
        hideMobile ? "hidden md:block" : ""
      } text-${align} ${className}`}
    >
      {children}
    </div>
  );
};

export default ResponsiveTable;
