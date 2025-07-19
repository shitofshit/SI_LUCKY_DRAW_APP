import { createSlice } from '@reduxjs/toolkit';

const initialParticipants = [
  { id: 1, empCode: 'E677', name: 'KONG CHUN KHIN' },
  { id: 2, empCode: 'E060', name: 'HARRIS FUNG JIM CHOI' },
  { id: 3, empCode: 'E213', name: 'WILLIS FUNG SHIN CHOI' },
  { id: 4, empCode: 'E691', name: 'IVAN NG WYE HAN' },
  { id: 5, empCode: 'E214', name: 'CHAN PUI KWAN' },
  { id: 6, empCode: 'E649', name: 'CHEN WAI TUNG' },
  { id: 7, empCode: 'E067', name: 'CHEOK SHEAU CHYI' },
  { id: 8, empCode: 'E043', name: 'CHEONG SOON HEE' },
  { id: 9, empCode: 'E573', name: 'CHEW MING YOONG' },
  { id: 10, empCode: 'E656', name: 'CHONG KWONG WEI' },
  { id: 11, empCode: 'E394', name: 'CHONG XIN WEI' },
  { id: 12, empCode: 'E159', name: 'CHONG YONG SIONG' },
  { id: 13, empCode: 'E075', name: 'CHOW KOK LEONG' },
  { id: 14, empCode: 'E486', name: 'FELICIA KWOK MEI TIEN' },
  { id: 15, empCode: 'E147', name: 'HEW HOW JIT' },
  { id: 16, empCode: 'E680', name: 'HEW ZHI SIAN' },
  { id: 17, empCode: 'E578', name: 'KONG TENG KEAT' },
  { id: 18, empCode: 'E536', name: 'LEE DE BIN' },
  { id: 19, empCode: 'E527', name: 'LEE KIAN HWANG' },
  { id: 20, empCode: 'E519', name: 'LEE LIANG CHIAN RAYMOND' },
  { id: 21, empCode: 'E650', name: 'LOW ZEE SHUEN' },
  { id: 22, empCode: 'E373', name: 'LUI YEOK PENG' },
  { id: 23, empCode: 'E036', name: 'QUEK SEOW HUEN' },
  { id: 24, empCode: 'E557', name: 'TAN CHOON SIN' },
  { id: 25, empCode: 'E355', name: 'TAN SEA NI' },
  { id: 26, empCode: 'E630', name: 'TEO YI YANG' },
  { id: 27, empCode: 'E090', name: 'WAN HOONG WAI' },
  { id: 28, empCode: 'E066', name: 'WONG YEET CHOON' },
  { id: 29, empCode: 'E422', name: 'YEAM CHI YING' },
  { id: 30, empCode: 'E094', name: 'LOW WEE HENG' },
  { id: 31, empCode: 'E340', name: 'NG CHIA CHUNG' },
  { id: 32, empCode: 'E603', name: 'ONG SIEW LAN' },
  { id: 33, empCode: 'E237', name: 'WOO CHUAN CHOONG' },
  { id: 34, empCode: 'E358', name: 'ANG LAI WAN' },
  { id: 35, empCode: 'E534', name: 'BONG KIM FAT' },
  { id: 36, empCode: 'E514', name: 'KANG ZHENG LOONG' },
  { id: 37, empCode: 'E594', name: 'OH YEE PENG' },
  { id: 38, empCode: 'E560', name: 'SIMRANJEET SINGH A/L M BALBIR SINGH' },
  { id: 39, empCode: 'E543', name: 'SERENE KWOK BAO YI' },
  { id: 40, empCode: 'E314', name: 'WINDA NGEN PEI CHEN' },
  { id: 41, empCode: 'E604', name: 'CHIN ZHI CHI' },
  { id: 42, empCode: 'E006', name: 'CHAN WAI KONG' },
  { id: 43, empCode: 'E627', name: 'CHU PUI REE' },
  { id: 44, empCode: 'E030', name: 'GOH HOAY HOON' },
  { id: 45, empCode: 'E068', name: 'KHU WEI MIN' },
  { id: 46, empCode: 'E576', name: 'LEONG YEU FAI' },
  { id: 47, empCode: 'E465', name: 'MUHD. ZULFAHMI BIN MALEK' },
  { id: 48, empCode: 'E287', name: 'NOR SYAFEENAZ BINTI MOHD NASHIR' },
  { id: 49, empCode: 'E450', name: 'SITI NADIRAH BINTI ROSLI' },
  { id: 50, empCode: 'E633', name: 'TAN SZE YING' },
  { id: 51, empCode: 'E662', name: 'NG HUI CHING' },
  { id: 52, empCode: 'E598', name: 'HEOI CHENG SAM' },
  { id: 53, empCode: 'E459', name: 'LOW CHEE KEONG' },
  { id: 54, empCode: 'E669', name: 'CHONG HOONG CHUEN' },
  { id: 55, empCode: 'E577', name: 'LAI XIN YI' },
  { id: 56, empCode: 'E631', name: 'LAU ZIHAO' },
  { id: 57, empCode: 'E585', name: 'LIEW YEE WEI' },
  { id: 58, empCode: 'E564', name: 'LIM ENG LOON' },
  { id: 59, empCode: 'E396', name: 'NG TZE HONG' },
  { id: 60, empCode: 'E655', name: 'SEOW YANG JIIN' },
  { id: 61, empCode: 'E609', name: 'TIONG SHIAU FUNG' },
  { id: 62, empCode: 'E507', name: 'CHAN YI WEN' },
  { id: 63, empCode: 'E460', name: 'CHIN XIN YEE' },
  { id: 64, empCode: 'E675', name: 'CHONG WEI SHIN' },
  { id: 65, empCode: 'E029', name: 'LIEW YEONG HWA' },
  { id: 66, empCode: 'E659', name: 'ELVINA CHU SYN YEE' },
  { id: 67, empCode: 'E654', name: 'WILLY CHAI YI XIAN' },
  { id: 68, empCode: 'E359', name: 'ANG LAN SHEH' },
  { id: 69, empCode: 'E622', name: 'BOH ZE KAI' },
  { id: 70, empCode: 'E041', name: 'CHAN CHEE MENG' },
  { id: 71, empCode: 'E367', name: 'CHANG JONG MUN' },
  { id: 72, empCode: 'E190', name: 'CHIAH WOAN CHYNG' },
  { id: 73, empCode: 'E009', name: 'CHIN SHOOK THEING' },
  { id: 74, empCode: 'E210', name: 'CHONG HON LIP' },
  { id: 75, empCode: 'E321', name: 'CHONG WEI YEE' },
  { id: 76, empCode: 'E375', name: 'CHOY VOON SEONG' },
  { id: 77, empCode: 'E629', name: 'CHU YEE TIENG' },
  { id: 78, empCode: 'E184', name: 'EDDIE LIM XHEN SHENG' },
  { id: 79, empCode: 'E673', name: 'HONG YA CHENG' },
  { id: 80, empCode: 'E475', name: 'KAREN HONG KAI LOON' },
  { id: 81, empCode: 'E683', name: 'KOW YANN TANG' },
  { id: 82, empCode: 'E485', name: 'LIEW HUI LYN' },
  { id: 83, empCode: 'E347', name: 'LIM AI ZHI' },
  { id: 84, empCode: 'E437', name: 'LOKE KAI CHEONG' },
  { id: 85, empCode: 'E542', name: 'ONG PEI MIN' },
  { id: 86, empCode: 'E311', name: 'PHILANDER ADRIAAN' },
  { id: 87, empCode: 'E696', name: 'SUNG JUN KYU' },
  { id: 88, empCode: 'E055', name: 'THOO YUN LOONG' },
  { id: 89, empCode: 'E500', name: 'TOO XIN LAN' },
  { id: 90, empCode: 'E216', name: 'WONG JON VON' },
  { id: 91, empCode: 'E592', name: 'WONG POH WAN' },
  { id: 92, empCode: 'E493', name: 'WONG YU HENG' },
  { id: 93, empCode: 'E387', name: 'WU SEOW YOOK' },
  { id: 94, empCode: 'E531', name: 'JARED KONG BOON WEI' },
  { id: 95, empCode: 'E142', name: 'OOI SEK FERN' },
  { id: 96, empCode: 'E681', name: 'SIM JIA CHEN' },
  { id: 97, empCode: 'E400', name: 'KONG YOKE MEI' },
  { id: 98, empCode: 'E098', name: 'LIM PEI YEN' },
  { id: 99, empCode: 'E679', name: 'TAN HUE MEI' },
  { id: 100, empCode: 'E382', name: 'BEH MOON TING' },
  { id: 101, empCode: 'E582', name: 'CHEE ZHENG HONG' },
  { id: 102, empCode: 'E483', name: 'CHONG JIA YI' },
  { id: 103, empCode: 'E658', name: 'TAN SHI QI' },
  { id: 104, empCode: 'E276', name: 'ONG CHEE KHON' },
  { id: 105, empCode: 'E409', name: 'GOH SOON LONG' },
  { id: 106, empCode: 'E282', name: 'ANG CHING CHING' },
  { id: 107, empCode: 'E395', name: 'CHUNG FARN KIEN' },
  { id: 108, empCode: 'E296', name: 'HERMES PETER DE GUZMAN BUGAOAN' },
  { id: 109, empCode: 'E626', name: 'JONATHAN FREDDIE A/L SANDANASAMY' },
  { id: 110, empCode: 'E316', name: 'LAI JIA MING' },
  { id: 111, empCode: 'E566', name: 'LEE KHAI YI' },
  { id: 112, empCode: 'E351', name: 'LIEW MUI KEE' },
  { id: 113, empCode: 'E333', name: 'LIM YI CHEN' },
  { id: 114, empCode: 'E415', name: 'LOO WEI MENG' },
  { id: 115, empCode: 'E352', name: 'LUI DEQIU' },
  { id: 116, empCode: 'E266', name: 'MOHD EEYAD \'ADIL BIN MOHD NOR ASRI' },
  { id: 117, empCode: 'E553', name: 'PHIN JIE LI' },
  { id: 118, empCode: 'E479', name: 'TAN YAR LI' },
  { id: 119, empCode: 'E049', name: 'CHONG HON YEN' },
  { id: 120, empCode: 'E196', name: 'ANG WEY LOONG' },
  { id: 121, empCode: 'E690', name: 'JESSLYN ONG ZHI YING' },
  { id: 122, empCode: 'E570', name: 'NURUL SA\'ADAH BINTI ZABIDI' },
  { id: 123, empCode: 'E661', name: 'WONG SHI FEI' },
  { id: 124, empCode: 'T004', name: 'WONG KA CHUN' },
  { id: 125, empCode: 'E610', name: 'GOH ZI JIAN' },
  { id: 126, empCode: 'E583', name: 'LIM XUE EN' },
  { id: 127, empCode: 'E559', name: 'NG XIN MAN' },
  { id: 128, empCode: 'E682', name: 'ONG CHEA YEE' },
  { id: 129, empCode: 'E572', name: 'TAN EE SHENG' },
  { id: 130, empCode: 'E515', name: 'YEAP CI QING' },
  { id: 131, empCode: 'E097', name: 'TIW KIAT CHYI' },
  { id: 132, empCode: 'E348', name: 'CHENG TZY FENG' },
  { id: 133, empCode: 'E579', name: 'TAN SIEW CHEOK' },
  { id: 134, empCode: 'E520', name: 'TAN HOONG HEE' },
  { id: 135, empCode: 'E623', name: 'WONG KAH YAN' },
  { id: 136, empCode: 'E004', name: 'EE CHEE YIN' },
  { id: 137, empCode: 'E668', name: 'JAYCEE CHAN YA NI' },
  { id: 138, empCode: 'E170', name: 'LEE SHIN YEE' },
  { id: 139, empCode: 'E010', name: 'KUA CHIN CHUAN' },
  { id: 140, empCode: 'E300', name: 'CHIN ZHENG LOONG' },
  { id: 141, empCode: 'E239', name: 'SALLY NG RUI YI' },
  { id: 142, empCode: 'E569', name: 'WONG SIEW LING' },
  { id: 143, empCode: 'E292', name: 'KOW CHOON SIEW' },
  { id: 144, empCode: 'E327', name: 'TAM CHOI LI' },
  { id: 145, empCode: 'E685', name: 'CHONG YU CHIA' },
  { id: 146, empCode: 'E602', name: 'CHUA KUAN WEY' },
  { id: 147, empCode: 'E697', name: 'FONG MUN YEE' },
  { id: 148, empCode: 'E672', name: 'LIM WEN LIN' },
  { id: 149, empCode: 'E533', name: 'YONG YOKE SHIAN' },
  { id: 150, empCode: 'E511', name: 'CALVIN GOH WAI KIT' },
  { id: 151, empCode: 'E642', name: 'CHIN CHEE SENG' },
  { id: 152, empCode: 'E563', name: 'H\'NG JUN JIE' },
  { id: 153, empCode: 'E007', name: 'LEIM CUN PING' },
  { id: 154, empCode: 'E295', name: 'YAP JING SIANG' },
  { id: 155, empCode: 'E421', name: 'CORONADO CESTLLY LOSLOSO' }
];

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
      const winner = action.payload;
      state.currentDraw.currentWinner = winner;
      state.currentDraw.isDrawing = false;
      
      // Add to winners history
      state.winners.push({
        ...winner,
        drawId: state.currentDraw.drawId,
        timestamp: new Date().toISOString(),
        drawNumber: state.stats.totalDraws + 1
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
