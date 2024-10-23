import json

# PATH = "./data/real_data.json"
PATH = "./data/real_data.json"

def get_data_from_file():
  with open(PATH, "r", encoding="utf-8") as json_file:
    data = json.load(json_file)
  return data

def add_changes(data):
  with open(PATH, "w", encoding="utf-8") as json_file:
    json.dump(data, json_file, ensure_ascii=False) 


def add_question_to_file(question_to_add):

  data = get_data_from_file()
  # create_new_tema = True

  if not check_if_subject_exists(question_to_add, data):
    return {"Error" : f"Subject: << {question_to_add['subject_name']} >> does not exist"}

  if not check_if_tema_exists(question_to_add, data):
    return {"Error": f"Tema: << {question_to_add['tema']} >> does not exist"}

  for subject in data:
    if subject["name"] == question_to_add["subject_name"]:
      for unit in subject["temas"]:

        if unit["name"] == question_to_add["tema"]:
          unit["questions"].append(question_to_add["question"])
          print("added")
          add_changes(data)
          return question_to_add
  return {"Error": "Something went wrong"}

def add_tema_to_file(tema_to_add):

  data = get_data_from_file()

  if not check_if_subject_exists(tema_to_add, data):
    return {"Error" : f"Subject: << {tema_to_add['subject_name']} >> does not exist"}

  if check_if_tema_exists(tema_to_add, data):
    return {"Error": f"Tema: << {tema_to_add['tema']} >> already exists"}

  if check_if_number_of_tema_exists(tema_to_add, data):
    return {"Error": f"Numero: << {tema_to_add['numero']} >> already exists"}

  for subject in data:
    if subject["name"] == tema_to_add["subject_name"]:
      subject["temas"].insert(tema_to_add["numero"]-1, {"name": tema_to_add["tema"],"numero": tema_to_add["numero"] ,"questions": []})
      print("Created new tema")
      add_changes(data)
      return tema_to_add

def add_subject_to_file(subject_to_add):

  data = get_data_from_file()

  if check_if_subject_exists(subject_to_add, data):
    return {"Error" : f"Subject: << {subject_to_add['subject_name']} >> already exists"}

  data.append({"name": subject_to_add["subject_name"], "images": [], "temas": []})
  add_changes(data)
  return subject_to_add

def add_image_to_file(image_to_add):
  data = get_data_from_file()

  if not check_if_subject_exists(image_to_add, data):
    return {"Error" : f"Subject: << {image_to_add['subject_name']} >> does not exist"}

  for subject in data:
    if subject["name"] == image_to_add["subject_name"]:
      subject["images"].append(image_to_add["img"])
      add_changes(data)
  return image_to_add


def check_if_subject_exists(request, data):
  subjects = [subject["name"] for subject in data]
  if len(subjects) <= 0: return False
  return request["subject_name"] in subjects

def check_if_tema_exists(request, data):
  temas = []
  for subject in data:
    for tema in subject["temas"]:
      temas.append(tema["name"])
  return request["tema"] in temas

def check_if_number_of_tema_exists(request,data):
  numbers = []
  for subject in data:
    if subject["name"] == request["subject_name"]:
      for tema in subject["temas"]:
        numbers.append(tema["numero"])

  return request["numero"] in numbers
  

