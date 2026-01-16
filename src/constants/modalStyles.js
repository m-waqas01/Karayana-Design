// Base responsive modal styles to use in all modals
export const modalContainerClass =
  "fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 sm:p-0";
export const modalBackdropClass = "fixed inset-0 bg-black/30 z-40";
export const modalBoxClass =
  "bg-white w-full sm:w-full max-w-md rounded-t-xl sm:rounded-xl shadow-xl flex flex-col max-h-[90vh] sm:max-h-none";
export const modalHeaderClass =
  "p-4 sm:p-5 flex items-center justify-between border-b";
export const modalBodyClass = "flex-1 overflow-y-auto p-4 sm:p-5 space-y-4";
export const modalFooterClass = "p-4 sm:p-5 border-t flex gap-3";
export const inputClass =
  "w-full border border-gray-300 rounded-lg px-3 py-2 text-sm sm:text-base focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all";
export const labelClass =
  "text-xs sm:text-sm font-medium text-gray-700 mb-1 block";
export const buttonPrimaryClass =
  "px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base font-medium";
export const buttonSecondaryClass =
  "px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm sm:text-base font-medium";

export default {
  modalContainerClass,
  modalBackdropClass,
  modalBoxClass,
  modalHeaderClass,
  modalBodyClass,
  modalFooterClass,
  inputClass,
  labelClass,
  buttonPrimaryClass,
  buttonSecondaryClass,
};
