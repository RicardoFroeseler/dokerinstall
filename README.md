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
