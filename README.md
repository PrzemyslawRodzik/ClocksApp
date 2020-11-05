### 1B 
## Budowa obrazu docker 

```sh
$  docker build https://github.com/PrzemyslawRodzik/ClocksApp.git
```
### 2B
Automatyczne budowanie obrazu wykonuje się w momencie wysłania zmian do zdalnego repozytorium Github:
```sh
$ git push https://github.com/PrzemyslawRodzik/ClocksApp
```
Komenda umożliwiająca pobranie utworzonego obrazu:
```sh
$ docker pull przemr/clocksapp
```
automatyczne
