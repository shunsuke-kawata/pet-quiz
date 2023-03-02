from fastapi import FastAPI,HTTPException
import firebase_operation
app = FastAPI()

db= firebase_operation.init_database()

@app.get("/")
async def root():
 return {"gabaithon":"team2"}


@app.get("/getData")
async def get_data():
 response = firebase_operation.get_questions_by_num(db,10)
 if(response==None):
  raise HTTPException(status_code=500, detail="response is invalid")
  
 return response

