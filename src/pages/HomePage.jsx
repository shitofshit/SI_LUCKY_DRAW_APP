import LuckyDrawCard from '../components/LuckyDrawCard'

function HomePage() {
  return (
    <div className='h-screen w-full overflow-auto' 
         style={{background: 'linear-gradient(45deg, #ff6b6b, #ee5a24)'}}>
      
      {/* Grid Container */}
      <div className="grid p-4 gap-4 h-full">
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 1" />
        </div>
        
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 2" />
        </div>
        
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 3" />
        </div>
        
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 4" />
        </div>
        
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 5" />
        </div>
        
        <div className="col-12 md:col-6 lg:col-4">
          <LuckyDrawCard title="Lucky Draw 6" />
        </div>
      </div>
    </div>
  )
}

export default HomePage