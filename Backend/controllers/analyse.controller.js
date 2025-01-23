
export const analyseRisk= 
async (req, res) => {
  
    console.log(req.body)
    try {
      const response = await fetch('http://127.0.0.1:5020/main', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(req.body), 
      });
        if (!response.ok) {
            throw new Error('Error with Flask API response');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ 
          status: "error",
          message: "Error connecting to Flask API",
          error: error.message
      });
    }
  }