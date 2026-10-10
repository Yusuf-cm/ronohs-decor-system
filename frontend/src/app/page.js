import Link from 'next/link';
import FeaturedProducts from '@/components/FeaturedProducts';
import RoomPreview from '@/components/RoomPreview';
import { FiArrowUpRight } from 'react-icons/fi';
export default function HomePage() {
  return <div className="decor-home">
    <section className="decor-hero"><div className="decor-intro"><p className="decor-eyebrow">RONOH’S DECOR / SPACES WITH SOUL</p><h1>A little more<br/>warmth.<br/><em>A lot more you.</em></h1><p className="decor-description">Thoughtful furniture, beautiful finishing touches and interiors that feel like home. Find your piece, or let’s shape the whole room.</p><div className="decor-actions"><Link className="decor-primary" href="/products">Explore the collection <FiArrowUpRight/></Link><Link className="decor-secondary" href="/contact">Plan your space <FiArrowUpRight/></Link></div><div className="decor-hero-note"><span>01</span><p>Good spaces start with a feeling.<br/>Explore three palettes to find yours.</p></div></div><RoomPreview/></section>
    <div className="decor-strip"><span>Furniture & finishing touches</span><span>Residential interiors</span><span>Commercial spaces</span><Link href="/services">Explore our services ↗</Link></div>
    <section className="decor-collection"><div className="decor-section-heading"><div><p className="decor-eyebrow">THE EDIT</p><h2>Small details.<br/><em>Beautiful difference.</em></h2></div><Link href="/products">Shop all pieces <FiArrowUpRight/></Link></div><FeaturedProducts/></section>
    <section className="decor-process"><div><p className="decor-eyebrow">FROM AN IDEA TO YOUR EVERYDAY</p><h2>Let’s make room<br/>for <em>your vision.</em></h2><p>Refresh a corner or rethink an entire space. Tell us what you have in mind, and we’ll work through the details together.</p><Link className="decor-primary" href="/contact">Start a conversation <FiArrowUpRight/></Link></div><div className="decor-steps">{[['01','Tell us your story','Your space, your priorities, your budget. A clear brief starts the conversation.'],['02','Find your direction','Explore colours, materials and pieces that fit the way you live.'],['03','Bring it together','Agree the scope and practical details before the work begins.']].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></section>
    <section className="decor-final"><p className="decor-eyebrow">YOUR NEXT CHAPTER, BEAUTIFULLY FRAMED</p><h2>Come home to<br/><em>something you love.</em></h2><Link href="/portfolio">Explore the project gallery <FiArrowUpRight/></Link></section>
  </div>;
}
