from selenium import webdriver
from selenium.webdriver.support.ui import Select
import time
from datetime import date
from firebase import firebase
import schedule
import random
import ctypes
try:
    import httplib
except:
    import http.client as httplib

def checkInternetHttplib():
    url="www.google.com"
    timeout=3
    conn = httplib.HTTPConnection(url, timeout=timeout)
    try:
        conn.request("HEAD", "/")
        conn.close()
        return True
    except Exception as e:
        print(e)
        return False
    
ctypes.windll.user32.ShowWindow( ctypes.windll.kernel32.GetConsoleWindow(), 0 )
firebase = firebase.FirebaseApplication('https://gprt-371c9-default-rtdb.firebaseio.com/', None)
def getData():
    driver = webdriver.Chrome("C:/Users/aouzi/Desktop/chromedriver.exe")
    driver.get('https://total.smarteez.eu/widget-prix/')
    time.sleep(4)
    today = date.today()
    d1 = today.strftime("%d-%m-%Y")
    selectVille = Select(driver.find_element_by_css_selector("select[name=ville]"))
    for option1 in selectVille.options:
     if option1.text=="Casablanca":
        selectVille.select_by_visible_text(option1.text)
        num2 = random.randint(5, 10)
        time.sleep(num2)
        selectStation = Select(driver.find_element_by_css_selector("select[name=station]"))
        for option in selectStation.options:
         if option.text!="Choisissez votre station" and option.text!="MOULAY DRISS" and option.text!="ZENATA" and option.text!="LES IRIS" :
            selectStation.select_by_visible_text(option.text)
            time.sleep(num2)
            ess = driver.find_element_by_css_selector("#prix_essence > div > span.number.dsdigital").text
            sp = driver.find_element_by_css_selector("#prix_aditive > div > span.number.dsdigital").text
            gaz = driver.find_element_by_css_selector("#prix_diesel > div > span.number.dsdigital").text
            data={
                'sans_plomb':ess,
                'gasoil':gaz,
                'excellum':sp
            }
            result = firebase.put('/'+option1.text+'/'+option.text+'/',d1,data)
            time.sleep(2)
    driver.close()
    

while not(checkInternetHttplib()):
    print("waiting for internet.....")
time.sleep(3)
print("Back")
schedule.every(5).seconds.do(getData)
while 1:
        schedule.run_pending()
        time.sleep(1)


