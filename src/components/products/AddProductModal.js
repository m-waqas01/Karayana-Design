import { useState } from "react";
import { X, Image, Plus, Trash2 } from "lucide-react";

const AddProductModal = ({ open, onClose, onSave }) => {
  const [form, setForm] = useState({
    title_en: "",
    title_ur: "",
    category: "",
    brand: "",
    price: "",
    stock: "",
    city: "",
    description_en: "",
    description_ur: "",
    image: null,

    includePacking: false,
    packings: [{ price: "", stock: "" }],

    enableBulk: false,
    bulkOrders: [{ price: "", stock: "" }],

    applyDiscount: false,
    discountValue: "",
    discountType: "percentage",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setForm({ ...form, image: files[0] || null });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  /* ---------- PACKING ---------- */
  const updatePacking = (i, field, value) => {
    const list = [...form.packings];
    list[i][field] = value;
    setForm({ ...form, packings: list });
  };

  const addPacking = () =>
    setForm({
      ...form,
      packings: [...form.packings, { price: "", stock: "" }],
    });

  const removePacking = (i) =>
    setForm({
      ...form,
      packings: form.packings.filter((_, idx) => idx !== i),
    });

  /* ---------- BULK ---------- */
  const updateBulk = (i, field, value) => {
    const list = [...form.bulkOrders];
    list[i][field] = value;
    setForm({ ...form, bulkOrders: list });
  };

  const addBulk = () =>
    setForm({
      ...form,
      bulkOrders: [...form.bulkOrders, { price: "", stock: "" }],
    });

  const removeBulk = (i) =>
    setForm({
      ...form,
      bulkOrders: form.bulkOrders.filter((_, idx) => idx !== i),
    });

  const handleSave = () => {
    onSave(form);
    onClose();
  };

  if (!open) return null;

  return (
    <>
      {/* BACKDROP */}
      <div onClick={onClose} className="fixed inset-0 bg-black/30 z-40" />

      {/* MODAL */}
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className="bg-white w-full max-w-lg h-[92vh] rounded-xl shadow-xl flex flex-col">
          {/* HEADER */}
          <div className="p-5 flex items-center justify-between border-b">
            <h2 className="text-lg font-semibold">Add Product</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <X size={18} />
            </button>
          </div>

          {/* BODY */}
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
            {/* IMAGE */}
            <div className="flex flex-col items-center">
              {form.image ? (
                <img
                  alt=""
                  src={URL.createObjectURL(form.image)}
                  className="w-24 h-24 rounded-lg object-cover mb-2"
                />
              ) : (
                <div className="w-24 h-24 rounded-lg bg-gray-100 flex items-center justify-center mb-2">
                  <Image className="text-gray-400" />
                </div>
              )}
              <input type="file" name="image" onChange={handleChange} />
            </div>

            {/* TITLES */}
            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Title (English)"
                name="title_en"
                value={form.title_en}
                onChange={handleChange}
              />
              <Input
                label="Title (Urdu)"
                name="title_ur"
                value={form.title_ur}
                onChange={handleChange}
              />
            </div>

            <Select
              label="Category"
              name="category"
              value={form.category}
              onChange={handleChange}
              options={["Electronics", "Grocery", "Clothing"]}
            />
            <Select
              label="Brand"
              name="brand"
              value={form.brand}
              onChange={handleChange}
              options={["Apple", "Samsung", "Local"]}
            />

            <div className="grid grid-cols-2 gap-3">
              <Input
                label="Price"
                type="number"
                name="price"
                value={form.price}
                onChange={handleChange}
              />
              <Input
                label="In Stock"
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleChange}
              />
            </div>

            <Select
              label="City"
              name="city"
              value={form.city}
              onChange={handleChange}
              options={["Lahore", "Karachi", "Islamabad"]}
            />

            <TextArea
              label="Description (English)"
              name="description_en"
              value={form.description_en}
              onChange={handleChange}
            />
            <TextArea
              label="Description (Urdu)"
              name="description_ur"
              value={form.description_ur}
              onChange={handleChange}
            />

            {/* PACKING */}
            <Section
              title="Include Packing"
              checked={form.includePacking}
              onToggle={() =>
                setForm({ ...form, includePacking: !form.includePacking })
              }
            >
              {form.packings.map((p, i) => (
                <Row key={i}>
                  <Input
                    disabled={!form.includePacking}
                    placeholder="Price"
                    value={p.price}
                    onChange={(e) => updatePacking(i, "price", e.target.value)}
                  />
                  <Input
                    disabled={!form.includePacking}
                    placeholder="Stock"
                    value={p.stock}
                    onChange={(e) => updatePacking(i, "stock", e.target.value)}
                  />
                  <IconBtn
                    disabled={!form.includePacking}
                    onClick={() => removePacking(i)}
                  >
                    <Trash2 size={16} />
                  </IconBtn>
                </Row>
              ))}
              <AddBtn disabled={!form.includePacking} onClick={addPacking} />
            </Section>

            {/* BULK */}
            <Section
              title="Enable Bulk Order"
              checked={form.enableBulk}
              onToggle={() =>
                setForm({ ...form, enableBulk: !form.enableBulk })
              }
            >
              {form.bulkOrders.map((b, i) => (
                <Row key={i}>
                  <Input
                    disabled={!form.enableBulk}
                    placeholder="Price"
                    value={b.price}
                    onChange={(e) => updateBulk(i, "price", e.target.value)}
                  />
                  <Input
                    disabled={!form.enableBulk}
                    placeholder="Stock"
                    value={b.stock}
                    onChange={(e) => updateBulk(i, "stock", e.target.value)}
                  />
                  <IconBtn
                    disabled={!form.enableBulk}
                    onClick={() => removeBulk(i)}
                  >
                    <Trash2 size={16} />
                  </IconBtn>
                </Row>
              ))}
              <AddBtn disabled={!form.enableBulk} onClick={addBulk} />
            </Section>

            {/* DISCOUNT */}
            <Section
              title="Apply Discount"
              checked={form.applyDiscount}
              onToggle={() =>
                setForm({ ...form, applyDiscount: !form.applyDiscount })
              }
            >
              <div className="grid grid-cols-2 gap-3">
                <Input
                  disabled={!form.applyDiscount}
                  placeholder="Discount Value"
                  value={form.discountValue}
                  onChange={(e) =>
                    setForm({ ...form, discountValue: e.target.value })
                  }
                />
                <Select
                  disabled={!form.applyDiscount}
                  value={form.discountType}
                  onChange={(e) =>
                    setForm({ ...form, discountType: e.target.value })
                  }
                  options={["percentage", "fixed"]}
                />
              </div>
            </Section>
          </div>

          {/* FOOTER */}
          <div className="p-5 border-t flex gap-3">
            <button onClick={onClose} className="w-full border rounded-lg py-2">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="w-full bg-orange-500 text-white rounded-lg py-2"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

/* ---------- REUSABLE UI ---------- */

const Input = ({ label, disabled, ...props }) => (
  <div className="flex flex-col w-full">
    {label && <label className="text-sm text-gray-500 mb-1">{label}</label>}
    <input
      disabled={disabled}
      {...props}
      className={`border rounded-lg px-3 py-2 ${
        disabled
          ? "bg-gray-100 text-gray-400"
          : "focus:ring-2 focus:ring-orange-400"
      }`}
    />
  </div>
);

const Select = ({ label, options, disabled, ...props }) => (
  <div className="flex flex-col w-full">
    {label && <label className="text-sm text-gray-500 mb-1">{label}</label>}
    <select
      disabled={disabled}
      {...props}
      className={`border rounded-lg px-3 py-2 ${
        disabled
          ? "bg-gray-100 text-gray-400"
          : "focus:ring-2 focus:ring-orange-400"
      }`}
    >
      <option value="">Select</option>
      {options.map((o) => (
        <option key={o} value={o}>
          {o}
        </option>
      ))}
    </select>
  </div>
);

const TextArea = ({ label, ...props }) => (
  <div className="flex flex-col">
    <label className="text-sm text-gray-500 mb-1">{label}</label>
    <textarea
      {...props}
      rows={3}
      className="border rounded-lg px-3 py-2 focus:ring-2 focus:ring-orange-400"
    />
  </div>
);

const Section = ({ title, checked, onToggle, children }) => (
  <div className="space-y-3">
    <div className="flex items-center gap-2">
      <Toggle checked={checked} onChange={onToggle} />
      <span className="font-medium">{title}</span>
    </div>
    {children}
  </div>
);

const Row = ({ children }) => (
  <div className="flex gap-2 items-center">{children}</div>
);

const AddBtn = ({ onClick, disabled }) => (
  <button
    disabled={disabled}
    onClick={onClick}
    className={`flex items-center gap-2 text-orange-500 ${
      disabled ? "opacity-50 cursor-not-allowed" : ""
    }`}
  >
    <Plus size={16} /> Add More
  </button>
);

const IconBtn = ({ children, ...props }) => (
  <button {...props} className="text-red-500 hover:bg-red-50 p-2 rounded">
    {children}
  </button>
);

const Toggle = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`w-8 h-4 rounded-full relative transition ${
      checked ? "bg-orange-500" : "bg-gray-300"
    }`}
  >
    <span
      className={`absolute top-0.5 w-3 h-3 bg-white rounded-full transition ${
        checked ? "right-0.5" : "left-0.5"
      }`}
    />
  </button>
);

export default AddProductModal;
