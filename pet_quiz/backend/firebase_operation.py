
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random

JSON_PATH='./pet-quiz-cf348-firebase-adminsdk-4oflx-cde31cd4ab.json'
def init_database():
    cred = credentials.Certificate(JSON_PATH)
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    return db


add_json ={
            "id" :11,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            }

add_list = [
    {
            "id" :12,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            },
            {
            "id" :13,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            },
            {
            "id" :14,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            },
            {
            "id" :15,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            },
            {
            "id" :5,
            "question": "これはペンですか。",
            "choices":[
                {
                    "optionId":1,
                    "body":"選択肢1",
                    "flag":True
                },
                {
                    "optionId":2,
                    "body":"選択肢2",
                    "flag":False
                },
                {
                    "optionId":3,
                    "body":"選択肢3",
                    "flag":False
                },
                {
                    "optionId":4,
                    "body":"選択肢4",
                    "flag":False
                }],
            "explanation":"これはペンです。"
            }

]
def add_data(db,add):
    
    try:
        doc_ref = db.collection('questions')
        
        doc_ref.add(add)
        print(1)
        return
    except:
        print(2)
        return

def add_some_data(db,add_list_data):      
    doc_ref = db.collection('questions')
    for add_j in add_list_data:
        try:
            doc_ref.add(add_j)
            print("added")
        except:
            print("denyed")
            return

        

def main():
    db = init_database()
    
    # add_data(db,add_json)
    add_list = [add_json,add_json,add_json,add_json,add_json,add_json]
    add_some_data(db,add_list)

#問題数を指定して問題を返す
def get_questions_by_num(db,number):
    docs = get_all_questions(db)
    if not (docs==None):
    #ナンバーの有効性を判定
        print("doc len is ", len(docs))
        if(number<=len(docs)):
            published = []
            questions = []
            i=0
            while(i<number):
                ##問題番号をランダムに生成
                question_index = random.randint(0,len(docs)-1)
                if not (question_index in published):
                    published.append(question_index)
                    for doc in docs:
                        if(str(doc.get("id"))==str(question_index)):
                            question=doc.to_dict()
                            questions.append(question)
                            i+=1
            
            return questions
                
        else:
            return None
    else:
        return

    
def get_all_questions(db):
     questions_ref = db.collection(u'questions')
     docs = questions_ref.get()
     if (len(docs)==0):
        return None    
     else:
        return docs

if __name__=='__main__':
    main()

