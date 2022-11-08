# APIREST-ReactJS

Une API REST en Node.js/Express lié à une base de donnée (MongoDB [https://mongodb.github.io/node-mongodb-native/3.2/](https://mongodb.github.io/node-mongodb-native/3.2/) ) qui contient les produits (voir plus bas) et qui permettra de créer, récupérer, modifier ou supprimer ces données.

Bonjour,  Je vous remercie d'avoir accepté de passer le test tech

* [ ] col1col2col3

nique.

Vous devez réaliser avant **jeudi 10h00 :**

- Une API REST en Node.js/Express lié à une base de donnée (MongoDB [https://mongodb.github.io/node-mongodb-native/3.2/](https://efgiaii.r.af.d.sendibt2.com/tr/cl/hFO2IXe4lxlAqCT3kstLcg-4O5dyJW4x44bmVYze4fAMPTVWttCoFb0sIGE4mkLb0CzwvclAFiVBHJ8u97eTbqUZU1Mjrff1FFm1Rnrhi-h2OAieNwLXegh2rMsLVjGNsIS-4c09wkVwjKM3jS8Fy2lXL8m5r--FDbr7IKchxKLYJ9ZB2mPjSMIj4GqmxVmTIaGJkVMCRhk_vTczsKpSayMRPIbxAdpFuLAfXjX5SiYfSRHJT9YIqVpYNiHsIIJacntUehcynnwO) ) qui contient les produits (voir plus bas) et qui permettra de créer, récupérer, modifier ou supprimer ces données.
- Une application Web en ReactJS qui permettra de consulter ces produits, les modifier, en supprimer ou en créer de nouveaux, vous afficherez les produits dans une liste. Pour la modification et la suppression, nous vous laissons le choix de la view à implémenter (Page de modification/Popup, etc).
- Vous devrez utiliser Material UI ([https://material-ui.com/](https://efgiaii.r.af.d.sendibt2.com/tr/cl/Ty0sdaK1W6AsOzEhfVld6t_AWNQx4L5dteoaFEkzeP5aHOD4GtDMOpUhD-xvQLEqlJCR-QdB1vhUUuIHFi4sy6E8fyURse-UExhbJjZc04hMAfxcAo6GXUsjRQflgEtQV3OvmmUsuSYG8w90pqHAgYws7sD5suxO7kkYL0CskMj-cJK1nJFmmvL8thRqqpQRmt8QU0glqX2EzhpzUL39c0YAbmEqk5Eq3x2d)) pour le design.

Bonus :

- WebSocket: ([https://socket.io/](https://efgiaii.r.af.d.sendibt2.com/tr/cl/bz4oTacnyRS2wz-22cofuPbgvK2nDnnC3vWrAGHUl1cLe-7Lz5X-AoCRPaFnvHIJcZFRa98j1TvnuDzp0rMyJapPIj5L-vl174i0Zr-nGWDh1uLW5vt1dxn5wjtV8DWfnAH3q1nNBDFQH3WKbXTu2-9Tfn0wSdKJBx7J2xJRXUjrIkdq22yTmD_2ebU18zhE14ColVoGDMJ7Ju_X1WpSSTGn1uW3)) à implémenter entre le serveur et l'application afin de garder les produits à jour.
- Authentification JWT/Token,
- Implémenter Redux ([https://redux.js.org/](https://efgiaii.r.af.d.sendibt2.com/tr/cl/3M5kMup2QqVVBQkVMDx3S_MkLOsqu1b_YVk9j2X2j-AZtd4sZ3A5FTywCIONsphXDJSdzlcfrdAku2EGlUqdwc4J1U87yUp3HAP7ta3NcT3SW6JhEWmtRdtB5Hd1-Q8YxetrSgQ8RmVRBvsqvRTv0Je8KjG3rIWwJYd5qasvVaOyzbtjmrkXMwIFR2DXcDHi5FD4vwcDn1XaUzyPcLMd4NIs6H2TKq9O)) dans l'application (pour charger les produits/gérer les actions)

Votre code devra respecter la norme du linter ESLint ([https://eslint.org/](https://efgiaii.r.af.d.sendibt2.com/tr/cl/OSw4OKQeFLg-IQN4rT1J5NXnO3Fg6S3u6mPY_AQSSg7Gus10dKFcuJPIohyswDUlY2Hoh4Hl1KLYHIXobGlbTTpjrOqo8K1eK1he1B4BeMF9HoxEQ0bgvvqaZ5zG6RgiLH0nHgkXoY2d0-mDFRsKRI1-nBBZUDd2c9xltYbKzMMH_l7_d31etmuWyvStJBcGMkPqQToj4VdALTW8G-LJy7y9qQ2NSg) ) (vous pouvez aussi l'installer directement via VSCode).

Pour nous remettre l'exercice, nous vous demandons un lien github public que nous pourrons cloner, contenant le projet complet.

Si vous avez la moindre question sur les features demandées, n'hésitez pas à nous écrire.

Merci de nous confirmer la bonne réception de ce message.

Bonne chance ![🍀](https://fonts.gstatic.com/s/e/notoemoji/14.0/1f340/72.png) ![➡️](https://fonts.gstatic.com/s/e/notoemoji/14.0/27a1_fe0f/72.png) Les produits de la base de données :  [     { "_id" : 1, "name" : "AC1 Phone1", "type" : "phone", "price" : 200.05, "rating" : 3.8,"warranty_years" : 1, "available" : true },     { "_id" : 2, "name" : "AC2 Phone2", "type" : "phone", "price" : 147.21, "rating" : 1,"warranty_years" : 3, "available" : false },     { "_id" : 3, "name" : "AC3 Phone3", "type" : "phone", "price" : 150, "rating" : 2,"warranty_years" : 1, "available" : true },     { "_id" : 4, "name" : "AC4 Phone4", "type" : "phone", "price" : 50.20, "rating" : 3,"warranty_years" : 2, "available" : true }
