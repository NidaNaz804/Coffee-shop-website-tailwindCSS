import Image from 'next/image';

const menuItems = [
  {
    category: 'Coffee',
    items: [
      { name: 'Espresso', price: 'PKR 525', description: 'Rich and bold single shot' },
      { name: 'Cappuccino', price: 'PKR 795', description: 'Espresso with steamed milk and foam' },
      { name: 'Latte', price: 'PKR 650', description: 'Espresso with lots of steamed milk and foam' },
      { name: 'Americano', price: 'PKR 675', description: 'Espresso with hot water' },
    ],
  },
  {
    category: 'Tea',
    items: [
      { name: 'Hot Tea, Breakfast', price: 'PKR 675', description: 'Classic black tea with english breakfast' },
      { name: 'Green Tea', price: 'PKR 550', description: 'Light and refreshing' },
      { name: 'Chai Latte', price: 'PKR 925', description: 'Spiced tea with steamed milk' },
    ],
  },
  {
    category: 'Pastries',
    items: [
      { name: 'Croissant', price: 'PKR 895', description: 'Buttery and flaky' },
      { name: 'Muffin', price: 'PKR 595', description: 'Daily baked selection' },
      { name: 'Cinnamon Roll', price: 'PKR 995', description: 'Fresh baked with cream cheese frosting' },
    ],
  },
];

export default function Menu() {
  return (
    <div className="menu-section px-4 py-12 max-w-7xl mx-auto animate-fadeIn">
      <div className="menu-header text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-gray-600">Carefully crafted drinks and treats for your enjoyment</p>
      </div>

      <div className="menu-grid grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="menu-left-column space-y-12">
          {menuItems.map((section) => (
            <div key={section.category}>
              <h2 className="menu-category text-2xl font-semibold mb-6">{section.category}</h2>
              <div className="menu-items">
                {section.items.map((item) => (
                  <div key={item.name} className="menu-item flex justify-between mb-6 animate-fadeIn">
                    <div>
                      <h3 className="menu-item-name font-medium">{item.name}</h3>
                      <p className="menu-item-description text-sm text-gray-600">{item.description}</p>
                    </div>
                    <span className="menu-item-price font-medium">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="menu-image-container relative h-[400px] w-[350px] rounded-lg overflow-hidden animate-zoomIn">
          <Image
            src="/menu.png"
            alt="Coffee and pastries"
            layout="fill"
            objectFit="cover"
            className="menu-image"
          />
        </div>
        <div className="menu2-image-container relative h-[400px] w-[350px] rounded-lg overflow-hidden animate-zoomIn">
          <Image
            src="/menu2.png"
            alt="Coffee"
            layout="fill"
            objectFit="cover"
            className="menu2-image"
          />
        </div>
      </div>
    </div>
  );
}
