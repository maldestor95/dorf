// english rules
// https://pegasus.de/media/pdf/ff/1e/56/4250231735486_EN.pdf

export enum tileNameEnum {
    ForestCabin = <any>"Cabane dans le bois",
    HarvestFestival = <any>"Fête des moissons",
    WatchTower = <any>"Tour de Guet",
    Locomotive = <any>"Locomotive",
    Ship = <any>"Bateaux",
    TrainStation = <any>"Gare",
    Harbor = <any>"Port",
    RedHearts = <any>"Coeurs rouges",
    Circus = <any>"Cirque",
    SignalMan = <any>"Signalisation ferroviaire",
    Sheperdess = <any>"Bergère",
    Hill = <any>"Colline",
    ConstructionSite = <any>"ConstructionSite",
    BalloonLaunch = <any>"BalloonLaunch",
    GoldenHearts = <any>"GoldenHearts",
    WareHouse = <any>"Entrepots",
    Cloud = <any>"Nuage"
}
export const rules: { [key: string]: string } = {
    "Cabane dans le bois": `Ajouter les points des tâches accomplies dans la forêt où se trouve la cabane`,
    "Fête des moissons": `Ajouter les points des tâches accomplies où se trouve la fête des moissons`,
    "Tour de Guet": `Ajouter les points des tâches accomplies du village où se trouve la tour de guet`,
    "Locomotive": `Ajouter les points des tâches accomplies sur la voie ferrée où se trouve la locomotive `,
    "Bateaux": `Ajouter les points des tâches accomplies sur le fleuve où se trouve les bateaux `,
    "Gare": `Si la voie ferrée reliée à la gare ne se termine pas par un bord ouvert (c'est-à-dire si elle est clôturée), elle rapporte 1 point par tuile qui la compose (y compris la gare) à la fin de la partie.`,
    "Port": `Si le fleuve relié au port ne se termine pas par un bord ouvert (c'est-à-dire s'il est clôturé), il rapporte 1 point par tuile qui le compose (y compris le port) à la fin de la partie.`,
    "Coeurs rouges": `vous pouvez placer un coeur sur une tuile qui n'est pas une tuile speciale ou un tuile tâche. En fin de partie, on compte 1 point par tuile voisine avec le décor correspondant`,
    "Cirque": `10 points si entièrement entouré`,
    "Signalisation ferroviaire": `En fin de partie, la signalisation ferroviaire donne 2 points pour chaque passage à niveau qui lui est relié`,
    "Bergère": `La bergère donne 1 point par mouton qui lui est connecté.Les moutons sont considérés comme connectés si ils sont sur un tuile adjacente à la bergère ou adjacente à une autre tuile où il y a des moutons.`,
    "Colline": `En fin de partie, la colline rapporte 2 points par tuile ordre à moins de 2 tuiles d'elle.`,
    "ConstructionSite": `Le chantier rapporte 7 points pour chacune des 3 zones à la fin de la partie, si la zone concernée est composée de 7 tuiles ou plus. Vous pouvez donc marquer 7, 14 ou 21 points.`,
    "BalloonLaunch": `Placez le ballon sur cette tuile spéciale lorsque vous la posez. À partir de ce moment, vous pouvez déplacer le ballon sur une tuile nouvellement posée adjacente à chaque tour. À la fin de la partie, comptez combien de tuiles il s'est déplacé depuis son point de départ (en suivant le chemin le plus court). Vous gagnez 2 points par tuile parcourue.`,
    "GoldenHearts": `Le cœur doré peut être placé selon les mêmes règles qu’un cœur rouge. À la fin de la partie, il rapporte 2 points au lieu de 1 pour chaque bord correspondant.`,
    "Entrepots": `Si vous révélez une tuile paysage(ni une tâche ni une tuile spéciale) et qu'il n'y a de tuile paysage  sur l'entrepôt,vous pouvez le placez sur l'entrepôt plutôt que sur l'air de jeu. Si il y a une tuile, vous pouvez la jouer depuis l'entrepôt au lieu de révéler une autre tuile`,
    "Nuage": `Si aucune voie ferrée ou rivière ne peut être poursuivie, vous pouvez y connecter un nuage.  Les voies ferrées ou rivières peuvent également bifurquer ici.`
}
export const tilePosition = {
    ForestCabin: "547, 5, 270, 235, 0, 0, 250, 250"
}

