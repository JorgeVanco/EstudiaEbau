import json
import demjson

# test ={"subject_name": "literatura", "tema": "Antonio Machado"  ,"question":{
# 						"question": "¿En qué año se publicó 'Soledades'?",
# 						"answers": ["1903 ", "1907", "1912"],
# 						"isDate": True,
# 					},}
# print(json.dumps(test))


# with open("test.json", "r", encoding="utf-8") as json_file:
#   data = json.load(json_file)

# for subject in data:
#   if subject["name"] == test["subject_name"]:
#     for unit in subject["temas"]:
#       if unit["name"] == test["tema"]:
#         unit["questions"].append(test["question"])
#         print("added")

with open("test.js", "r", encoding="utf-8") as fh:
  data = fh.read()
json_out = data[data.find("["):-2]
print(json_out)
json_decode = demjson.decode(json_out)
json_object = json.loads(json_decode)

# print(json_object)
with open("data_test.json", "w", encoding="utf-8") as json_file:
  json.dump(json_object, json_file, ensure_ascii=False)

# print("test", test)
# with open("test.txt", "r") as f:
#   # f.write("my first file\n")
#   # f.write("This file\n\n")
#   # f.write("contains three lines\n")
#   print(f.read())