import InfiniteMenu from '../../components/InfiniteMenu'
import coir from '../../assets/coir.jpg'
import fo from '../../assets/fo.jpg'
import homedecor from '../../assets/homedecor.jpg'
import toys from '../../assets/toys.jpg'
import leather from '../../assets/leather.jpg'

function ProductsSection() {
  const items = [
    {
      image: fo,
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
      image: leather,
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

  // Enhanced handler for item click - Multiple email options
  // ...existing code...
const handleItemClick = (item) => {
  const companyEmail = 'southernbayexim123@gmail.com';
  const subject = `Business Inquiry - ${item.title}`;
  const body = `Dear Southern Bay Exim Team,

I am interested in learning more about your ${item.title}.

Product Details:
- Product: ${item.title}
- Description: ${item.description}

Please provide me with the following information:
- Product specifications and varieties available
- Pricing and minimum order quantities
- Shipping and delivery details
- Certifications and quality standards
- Sample availability

I look forward to hearing from you soon.

Best regards,
[Your Name]
[Your Company]
[Your Contact Information]`;

  // Always open Gmail compose window
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(companyEmail)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.open(gmailUrl, '_blank');
};
// ...existing code...

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