import { createSlice } from '@reduxjs/toolkit';
import { initialParticipants } from "../../Constant";



const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    // All participants data
    allParticipants: initialParticipants,
    
    // Eligible participants for current draw (excludes already won)
    eligibleParticipants: initialParticipants,
    
    // Winners history
    winners: [],
    
    // Current draw state
    currentDraw: {
      isDrawing: false,
      currentWinner: null,
      drawId: null
    },
    
    // Statistics
    stats: {
      totalParticipants: initialParticipants.length,
      totalDraws: 0,
      remainingParticipants: initialParticipants.length
    }
  },
  reducers: {
    // Start a new draw
    startDraw: (state, action) => {
      state.currentDraw.isDrawing = true;
      state.currentDraw.drawId = action.payload.drawId || Date.now();
      state.currentDraw.currentWinner = null;
    },
    
    // Set the winner of current draw
    setWinner: (state, action) => {
      const { winner, prizeName } = action.payload;
      state.currentDraw.currentWinner = winner;
      state.currentDraw.isDrawing = false;
      
      // Add to winners history with prize info
      state.winners.push({
        ...winner,
        prizeName: prizeName,
      });
      
      // Remove from eligible participants
      state.eligibleParticipants = state.eligibleParticipants.filter(
        participant => participant.id !== winner.id
      );
      
      // Update statistics
      state.stats.totalDraws += 1;
      state.stats.remainingParticipants = state.eligibleParticipants.length;
    },
    
    // Reset current draw
    resetCurrentDraw: (state) => {
      state.currentDraw = {
        isDrawing: false,
        currentWinner: null,
        drawId: null
      };
    },
    
    // Reset all draws (start fresh)
    resetAllDraws: (state) => {
      state.eligibleParticipants = [...state.allParticipants];
      state.winners = [];
      state.currentDraw = {
        isDrawing: false,
        currentWinner: null,
        drawId: null
      };
      state.stats = {
        totalParticipants: state.allParticipants.length,
        totalDraws: 0,
        remainingParticipants: state.allParticipants.length
      };
    },
    
    // Add new participant
    addParticipant: (state, action) => {
      const newParticipant = {
        id: Math.max(...state.allParticipants.map(p => p.id)) + 1,
        ...action.payload
      };
      state.allParticipants.push(newParticipant);
      state.eligibleParticipants.push(newParticipant);
      state.stats.totalParticipants += 1;
      state.stats.remainingParticipants += 1;
    },
    
    // Remove participant
    removeParticipant: (state, action) => {
      const participantId = action.payload;
      state.allParticipants = state.allParticipants.filter(p => p.id !== participantId);
      state.eligibleParticipants = state.eligibleParticipants.filter(p => p.id !== participantId);
      state.stats.totalParticipants = state.allParticipants.length;
      state.stats.remainingParticipants = state.eligibleParticipants.length;
    }
  }
});

export const {
  startDraw,
  setWinner,
  resetCurrentDraw,
  resetAllDraws,
  addParticipant,
  removeParticipant
} = participantsSlice.actions;

export default participantsSlice.reducer;
