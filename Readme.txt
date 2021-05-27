Cette Application web permet la Comparaison des Prix des Carburants en Temps Réel.Les données sont issues en utilisant le WebScraping Avant de lancer le fichier Python scrapping.py pour recuperer les donnees, Vous devez tout d'abord ajouter les bibliotheques par les commandes suivantes pour lancer ce fichier:

pip install selenium 
pip install firebase 
pip install schedule
pip install httplib
pip install schedule

Telecharger chromedriver via le lien https://chromedriver.chromium.org/downloads
changer dans la fonction suivante:
  def getData():
  driver = webdriver.Chrome("mettez path vers chromedriver.exe")
  
Lancer le fichier Python

Les fonctionnalités principales:

1) Page d'accueil
    La page d'accueil contient une carte dans laquelle se trouve les meilleures stations au niveau des prix pour les trois types des carburants.
    
2) Affichge des Prix en temps reel
    L'utilisateur choisit la ville et la station voulue et i recoit en temps reel les prix de cette station.
    Il peut accéder à ce bloc soit en descendant ou bien en choisissant l’option pricing au top du page accueil.
    
3) Afficher les prix des carburants locaux le long d'un trajet
    Cette fonctionnalité sert à afficher les prix le long d’un trajet, l’utilisateur doit donner le point de départ et d’arrivée et l’application web va afficher les         stations-service autour de ces deux points dans Map.
    Il peut accéder à ce bloc soit en descendant ou bien en choisissant l’option Map au top du page accueil
    
4) Afficher L'ensemble des stations
    Cette fonction peut afficher l'ensemble des stations dans MAP avec leurs prix.
    
5) La station la plus proche / la moins chere
    L’utilisateur peut choisir entre la station la moins chère ou la plus proche ou les deux à la fois en indiquant sa position et le diamètre de recherche
    Il peut accéder à ce bloc soit en descendant ou bien en choisissant l’option Nearest/Cheapest gaz Station au top du page accueil
    
6) Statistiques
    Un graphe represente les meilleurs stations au niveau de la moyenne des prix de trois types des carburants.





