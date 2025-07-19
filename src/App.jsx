import { useState, useRef } from 'react'
import { Button } from 'primereact/button'
import { Card } from 'primereact/card'
import { ProgressSpinner } from 'primereact/progressspinner'
import { Badge } from 'primereact/badge'
import { Divider } from 'primereact/divider'
import { Toast } from 'primereact/toast'

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
<div>
  
</div>
  )
}

export default App
