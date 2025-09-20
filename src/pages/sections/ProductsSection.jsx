import InfiniteMenu from '../../components/InfiniteMenu'
import coir from '../../assets/coir.jpg'
import food from '../../assets/food.jpg'
import homedecor from '../../assets/homedecor.jpg'
import toys from '../../assets/toys.jpg'

function ProductsSection() {
  const items = [
    {
      image: food,
      link: 'https://google.com/',
      title: 'Food Items',
      description: 'Premium quality food items sourced from the finest regions across India.'
    },
    {
      image: coir,
      link: 'https://google.com/',
      title: 'Coir and Coir Products',
      description: 'Eco-friendly coir products made from coconut fiber, known for durability and sustainability.'
    },
    {
      image: homedecor,
      link: 'https://google.com/',
      title: 'Handicrafts & Home Decor',
      description: 'Handcrafted items celebrating traditional craftsmanship with contemporary designs.'
    },
    {
      image: 'https://picsum.photos/600/600?grayscale',
      link: 'https://google.com/',
      title: 'Leather Accessories',
      description: 'Premium leather goods combining quality materials with expert craftsmanship.'
    },
    {
      image: toys,
      link: 'https://google.com/',
      title: 'Toys and Gift Items',
      description: 'Fun, educational, and sustainable toys and gift items.'
    }
  ];

  // Handler for item click
  const handleItemClick = async (item) => {
    const email = window.prompt('Please enter your email address:');
    if (email && /\S+@\S+\.\S+/.test(email)) {
      // Call your backend API to send the email
      // Example:
      // await fetch('/api/send-mail', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email, product: item.title, link: item.link })
      // });
      alert(`A mail will be sent to ${email} for ${item.title}.`);
      // Optionally, open the link after email is sent
      // window.open(item.link, '_blank');
    } else if (email !== null) {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div style={{ height: '600px', position: 'relative' }}>
      <InfiniteMenu
        items={items}
        onItemClick={handleItemClick} // Pass the handler to InfiniteMenu
      />
    </div>
  );
}

export default ProductsSection;