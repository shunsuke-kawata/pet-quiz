
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import random
import json

JSON_PATH='./pet-quiz-cf348-firebase-adminsdk-4oflx-cde31cd4ab.json'
def init_database():
    cred = credentials.Certificate(JSON_PATH)
    firebase_admin.initialize_app(cred)
    db = firestore.client()

    return db


ADD_DATA_PATH = './add.json'
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

#問題数を指定して問題を返す
def get_questions_by_num(db,number):
    docs = get_all_questions(db)
    if not (docs==None):
        #ナンバーの有効性を判定
        if(number<=len(docs)):
            published = []
            questions = []
            i=0
            while(i<number):
                print('count:')
                print(i)
                print(len(docs)-1)
                # for doc in docs:
                #     print(doc.get("id"))
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
            print(222222)
            return None
    else:
        return

    
def get_all_questions(db):
     questions_ref = db.collection(u'questions')
     docs = questions_ref.get()
     if (len(docs)==0):
        print("err doc")
        return None    
     else:
        return docs

if __name__=='__main__':
    main()

