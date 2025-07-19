import { useState, useRef } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Badge } from 'primereact/badge'
import { Divider } from 'primereact/divider'
import { Toast } from 'primereact/toast'
import './App.css'

function App() {
  const toast = useRef(null)
  
  // Generate 150 participant names
  const participants = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'Diana Prince', 'Edward Wilson',
    'Fiona Davis', 'George Miller', 'Hannah Lee', 'Ian Taylor', 'Julia Anderson',
    'Kevin Martin', 'Linda Garcia', 'Michael Rodriguez', 'Nancy Lewis', 'Oliver Clark',
    'Patricia Hall', 'Quinn Allen', 'Rachel Young', 'Samuel King', 'Teresa Wright',
    'Ursula Lopez', 'Victor Hill', 'Wendy Scott', 'Xavier Green', 'Yasmin Adams',
    'Zachary Baker', 'Amy Collins', 'Brian Turner', 'Catherine Phillips', 'David Campbell',
    'Elena Parker', 'Frank Evans', 'Grace Edwards', 'Henry Collins', 'Iris Stewart',
    'James Sanchez', 'Katherine Morris', 'Lucas Rogers', 'Maria Reed', 'Nathan Cook',
    'Olivia Bailey', 'Peter Rivera', 'Quincy Cooper', 'Rebecca Richardson', 'Steven Cox',
    'Tina Howard', 'Uma Ward', 'Vincent Torres', 'Whitney Peterson', 'Xander Gray',
    'Yvonne Ramirez', 'Zoe James', 'Adam Watson', 'Bella Brooks', 'Carlos Kelly',
    'Deborah Sanders', 'Eric Price', 'Felicia Bennett', 'Gary Wood', 'Heather Barnes',
    'Isaac Ross', 'Jennifer Henderson', 'Kyle Coleman', 'Laura Jenkins', 'Marcus Perry',
    'Nicole Powell', 'Oscar Long', 'Pamela Patterson', 'Quentin Hughes', 'Rita Flores',
    'Scott Washington', 'Tiffany Butler', 'Ulrich Simmons', 'Veronica Foster', 'William Gonzales',
    'Ximena Bryant', 'Yolanda Alexander', 'Zion Russell', 'Andrea Griffin', 'Benjamin Diaz',
    'Cynthia Hayes', 'Daniel Myers', 'Emma Ford', 'Frederick Hamilton', 'Gabriela Graham',
    'Harrison Sullivan', 'Isabella Wallace', 'Jacob Woods', 'Kimberly Cole', 'Leonard West',
    'Michelle Jordan', 'Nicholas Owens', 'Ophelia Reynolds', 'Paul Fisher', 'Queenie Ellis',
    'Robert Gibson', 'Sophia Mason', 'Timothy Hunt', 'Ursula Freeman', 'Victoria Wells',
    'Walter Webb', 'Xara Simpson', 'Yves Stevens', 'Zelda Tucker', 'Anthony Porter',
    'Bridget Hunter', 'Calvin Hicks', 'Donna Crawford', 'Ethan Henry', 'Faith Boyd',
    'Gregory Mason', 'Hope Morales', 'Ignacio Kennedy', 'Jade Warren', 'Keith Stone',
    'Lydia Pierce', 'Malcolm Arnold', 'Naomi Lynch', 'Owen Carpenter', 'Priscilla Fuller',
    'Quinton Harvey', 'Rosemary Elliott', 'Sebastian Lane', 'Tabitha Marshall', 'Ulysses Meyer',
    'Vanessa Knight', 'Wade Burns', 'Xenia Fox', 'Yorick Rose', 'Zelma Washington',
    'Andre Banks', 'Brooke Mills', 'Cedric Palmer', 'Delores Berry', 'Eugene Ray',
    'Francine Armstrong', 'Gilbert Carpenter', 'Hazel Day', 'Irving Black', 'Jasmine Douglas',
    'Kendrick Perry', 'Lillian Cross', 'Moses Powell', 'Nadine Butler', 'Orlando Hayes'
  ]
  
  const [isRolling, setIsRolling] = useState(false)
  const [winner, setWinner] = useState(null)
  const [drawnParticipants, setDrawnParticipants] = useState([])
  const [currentRollingName, setCurrentRollingName] = useState('')
  
  const availableParticipants = participants.filter(name => !drawnParticipants.includes(name))
  
  const startLuckyDraw = () => {
    if (availableParticipants.length === 0) {
      toast.current.show({
        severity: 'warn',
        summary: 'No Participants',
        detail: 'All participants have been drawn!',
        life: 3000
      })
      return
    }
    
    setIsRolling(true)
    setWinner(null)
    
    // Rolling animation effect
    let rollCount = 0
    const maxRolls = 30
    
    const rollInterval = setInterval(() => {
      const randomName = availableParticipants[Math.floor(Math.random() * availableParticipants.length)]
      setCurrentRollingName(randomName)
      rollCount++
      
      if (rollCount >= maxRolls) {
        clearInterval(rollInterval)
        
        // Final winner selection
        const finalWinner = availableParticipants[Math.floor(Math.random() * availableParticipants.length)]
        setWinner(finalWinner)
        setDrawnParticipants(prev => [...prev, finalWinner])
        setIsRolling(false)
        setCurrentRollingName('')
        
        toast.current.show({
          severity: 'success',
          summary: 'Congratulations!',
          detail: `${finalWinner} is the winner!`,
          life: 5000
        })
      }
    }, 100)
  }
  
  const resetDraw = () => {
    setDrawnParticipants([])
    setWinner(null)
    setCurrentRollingName('')
    setIsRolling(false)
    
    toast.current.show({
      severity: 'info',
      summary: 'Reset Complete',
      detail: 'All participants are back in the draw!',
      life: 3000
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <Toast ref={toast} />
      
      <div className="flex flex-column align-items-center justify-content-center min-h-screen">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-bold text-white mb-3 text-shadow-2">
            🎉 Lucky Draw 🎉
          </h1>
          <p className="text-xl text-white opacity-90">
            Draw from {participants.length} amazing participants!
          </p>
        </div>

        {/* Main Draw Card */}
        <Card className="w-full max-w-4xl shadow-8 border-round-xl mb-4">
          <div className="text-center p-6">
            
            {/* Stats */}
            <div className="flex justify-content-center gap-4 mb-6">
              <div className="text-center">
                <Badge value={availableParticipants.length} severity="info" size="large" className="text-2xl p-3"></Badge>
                <div className="text-sm text-600 mt-2">Remaining</div>
              </div>
              <div className="text-center">
                <Badge value={drawnParticipants.length} severity="success" size="large" className="text-2xl p-3"></Badge>
                <div className="text-sm text-600 mt-2">Drawn</div>
              </div>
            </div>

            <Divider />

            {/* Draw Display */}
            <div className="my-8">
              {isRolling ? (
                <div className="text-center">
                  <ProgressSpinner className="mb-4" />
                  <div className="text-4xl font-bold text-primary mb-2 animate-pulse">
                    {currentRollingName}
                  </div>
                  <p className="text-lg text-600">Rolling the lucky draw...</p>
                </div>
              ) : winner ? (
                <div className="text-center">
                  <div className="text-6xl mb-4">🏆</div>
                  <div className="text-5xl font-bold text-green-600 mb-3">
                    {winner}
                  </div>
                  <p className="text-2xl text-600">Congratulations, Winner!</p>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl mb-4">🎲</div>
                  <p className="text-3xl text-600 mb-2">Ready to Draw?</p>
                  <p className="text-lg text-500">Click the button below to start the lucky draw!</p>
                </div>
              )}
            </div>

            <Divider />

            {/* Action Buttons */}
            <div className="flex justify-content-center gap-3 mt-6">
              <Button 
                label={isRolling ? "Rolling..." : "🎯 Start Lucky Draw"}
                onClick={startLuckyDraw}
                disabled={isRolling || availableParticipants.length === 0}
                className="p-button-lg p-button-rounded"
                severity="success"
                size="large"
              />
              
              <Button 
                label="🔄 Reset All"
                onClick={resetDraw}
                disabled={isRolling}
                className="p-button-lg p-button-rounded"
                severity="warning"
                outlined
                size="large"
              />
            </div>
          </div>
        </Card>

        {/* Winners History */}
        {drawnParticipants.length > 0 && (
          <Card className="w-full max-w-4xl shadow-4 border-round-lg">
            <div className="p-4">
              <h3 className="text-2xl font-bold text-center mb-4 text-primary">
                🏆 Winners History
              </h3>
              <div className="grid">
                {drawnParticipants.map((participant, index) => (
                  <div key={index} className="col-12 md:col-6 lg:col-4 p-2">
                    <div className="bg-green-50 border-green-200 border-1 border-round p-3 text-center">
                      <Badge value={`#${index + 1}`} severity="success" className="mb-2"></Badge>
                      <div className="font-semibold text-green-800">{participant}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  )
}

export default App
