# dokerinstall

-------------------------------
comandos
-------------------------------

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg


echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu jammy stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null


sudo apt update

sudo apt install docker-ce docker-ce-cli containerd.io


sudo usermod -aG docker $USER


docker --version


-------------------------------
teste
-------------------------------

docker run hello-world

sudo apt install docker-compose

sudo usermod -aG docker $USER

-------------------------------
configurar copia e cola da vm
-------------------------------
sudo apt update
sudo apt install build-essential dkms linux-headers-$(uname -r)
sudo /media/$USER/VBox*/VBoxLinuxAdditions.run

*reiniciar a maquina 

-------------------------------
instalando o jellyfin
-------------------------------
✅ 1. Criar uma pasta para armazenar os dados do Jellyfin:
mkdir -p ~/jellyfin/config
mkdir -p ~/jellyfin/cache
mkdir -p ~/jellyfin/media


✅ 2. Rodar o Jellyfin com Docker:
<pre> docker run -d --name jellyfin --user $(id -u):$(id -g) -p 8096:8096 -v ~/jellyfin/config:/config -v ~/jellyfin/cache:/cache -v ~/jellyfin/media:/media jellyfin/jellyfin
 </pre>


✅ 3. Acessar o Jellyfin:
http://localhost:8096



-------------------------------
instalando sub pastas
-------------------------------

mkdir -p ~/jellyfin/media/Filmes
mkdir -p ~/jellyfin/media/Séries
mkdir -p ~/jellyfin/media/Desenhos

para criar a pasta de edicao crie esta aqui ->

mkdir -p ~/jellyfin/config/data/themes/default


-------------------------------
acessando config no vscode
-------------------------------
se esta usando 
mkdir -p ~/jellyfin/config/data/themes

basta rodar este comando
code ~/jellyfin/config/data/themes

-------------------------------
reiniciando o servico
-------------------------------
docker restart jellyfin

-------------------------------
forcando tema
-------------------------------
abrir terminal:
docker exec -it jellyfin bash

rodar comando:
ls /config/data/themes/default

**custom.css  custom.js**


-------------------------------
atualizando versão
-------------------------------
1:
docker stop jellyfin

2:
docker rm jellyfin

3:
docker pull jellyfin/jellyfin:latest

4:
<pre> docker run -d --name jellyfin --user $(id -u):$(id -g) -p 8096:8096 -v ~/jellyfin/config:/config -v ~/jellyfin/cache:/cache -v ~/jellyfin/media:/media jellyfin/jellyfin:latest  </pre>



-------------------------------


