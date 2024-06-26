import axios from "axios";




export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
 
};


export const APIGetPhrase = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  headers: APIHeaders,
});
export const APIGame = axios.create({
  baseURL: "http://localhost:8000/game",
  headers: APIHeaders,
});
export const APIPhrases = axios.create({
  baseURL: "http://localhost:8000/phrases",
  headers: APIHeaders,
})

export const APIAddPhrase= axios.create({
  baseURL: import.meta.env.VITE_APP_ADD_PHRASE,
  headers: APIHeaders,
})

export const checkWord = async (word, userId) => {
  try {
    const response = await APIGame.post('/checkWord', { word, userId });
    return response.data;
  } catch (error) {
    console.error('Error al verificar la palabra:', error);
    throw error;
  }
};
export const getPhraseOfTheDay = async () => {
  try {
    const response = await APIGetPhrase.get('/');
   
    return response.data;
  } catch (error) {
    console.error('Error al obtener la frase del día:', error);
    throw error;
  }
};
export const addPhrase = async (phraseData) =>{
  try {
    const response = await APIAddPhrase.post('/', {phraseData});
    return response.data
  } catch (err) {
    console.error('Error al agregar la frase:', err);
  }
}
export const updateGame = async (gameId, gameData) =>{
  try {
    const response = await APIGame.put(`/update/${gameId}`, {gameData});
    localStorage.setItem('activeGame', JSON.stringify(response.data));
    return response.data
  } catch (err) {
    console.error('Error al actualizar el juego:', err);
  }
}

export const getUserPastPhrases=async (userId)=>{
  try {
    const response = await APIPhrases.get(`/getoldphrases/${userId}`);
  
    return response.data
  } catch (err) {
    console.error('Error al obtener los juegos pasados:', err);
  }
}

export const getPhraseByNumber = async (phraseNumber) => {
  try {
    
    const response = await APIPhrases.get(`/getphrasebynumber/${phraseNumber}`);

    return response.data;
  } catch (error) {
    console.error('Error al obtener la frase por número:', error);
    throw error;
  }
};