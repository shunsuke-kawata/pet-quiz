from fastapi import FastAPI,HTTPException
from fastapi.middleware.cors import CORSMiddleware
import firebase_operation
app = FastAPI()

origins = ["http://localhost:3000","https://gabaithon202303-team2-v8yd.vercel.app/"]
app.add_middleware(
  CORSMiddleware,
  allow_origins=["*"],
  allow_credentials=False,
  allow_methods=["*"],
  allow_headers=["*"],
)

db= firebase_operation.init_database()

@app.get("/")
async def root():
 return {"gabaithon":"team2"}


@app.get("/getData")
async def get_data():
 
 response = firebase_operation.get_questions_by_num(db,10)
 if(response==None):
  print("response none")
  raise HTTPException(status_code=500, detail="response is invalid")
#  else :
    # response.headers.add('Access-Control-Allow-Origin', '*')
 return response

