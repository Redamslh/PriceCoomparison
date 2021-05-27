# Pricecomparaison
<img src="./assets/img/pompe.png" width="100">

**Cette Application web permet la Comparaison des Prix des Carburants en Temps Réel.Les données sont issues en utilisant le WebScraping
Avant de lancer le fichier Python scrapping.py pour recuperer les donnees, Vous devez tout d'abord ajouter les bibliotheques par les commandes suivantes pour lancer ce fichier :**

``` bach 
pip install selenium 

pip install firebase 

pip install schedule

pip install httplib

pip install schedule
```
**Telecharger chromedriver via le lien** [chromedriver](https://chromedriver.chromium.org/downloads)

```python
def getData():
  driver = webdriver.Chrome("mettez path vers chromedriver.exe")
```

## Les fonctionnalités principales

> Page d'accueil

La page d'accueil contient une carte dans laquelle se trouve les meilleures stations au niveau des prix pour les trois types des carburants.


<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/pageAccueil.PNG" width="500">




> Affichge des Prix en temps reel

L'utilisateur choisit la ville et la station voulue et i recoit en temps reel les prix de cette station.

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/ensemblePrix.PNG" width="500">

> -	Afficher les prix des carburants locaux le long d'un trajet 

Cette fonctionnalité sert à afficher les prix le long d’un trajet, l’utilisateur doit donner le point de départ et d’arrivée et l’application web va afficher les stations-service autour de ces deux points dans Map.

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/longtrajet.PNG" width="500">

> Afficher L'ensemble des stations

Cette fonction peut afficher l'ensemble des stations dans MAP avec leurs prix.

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/ensembleStation.PNG" width="500">

> La station la plus proche / la moins chere

L’utilisateur peut choisir entre la station la moins chère ou la plus proche ou les deux à la fois en indiquant sa position et le diamètre de recherche

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/stationPlusProche.PNG" width="500">

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/StationMoinsChere.PNG" width="500">



> Statistiques

Un graphe represente les meilleurs stations au niveau de la moyenne des prix de trois types des carburants.

<img src="https://github.com/Redamslh/PriceCoomparison/blob/master/assets/img/statistique.PNG" width="500">







