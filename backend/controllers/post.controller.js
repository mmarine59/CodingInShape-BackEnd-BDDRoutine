const PostModel = require("../models/post.model");

// Récupérer messages à partir de BDD
module.exports.getPosts = async (req, res) => {
  const posts = await PostModel.find();
  res.status(200).json(posts);
};

// Enregistre nouveau message dans BDD
module.exports.setPosts = async (req, res) => {
  const exerciceOne = req.body.routine.exerciceOne;
  const exerciceTwo = req.body.routine.exerciceTwo;
  const exerciceThree = req.body.routine.exerciceThree;
  const exerciceFour = req.body.routine.exerciceFour;
  const exerciceFive = req.body.routine.exerciceFive;

  if (!req.body.routine || !req.body.routine.exerciceOne) {
    res
      .status(400)
      .json({
        message: "Les données d'exerciceOne sont manquantes dans la requête.",
      });
    return;
  }

  // Création nouveau post
  const post = await PostModel.create({
    routine: {
      exerciceOne: {
        name: exerciceOne.name,
        description: exerciceOne.description,
        target: exerciceOne.target,
        benefits: exerciceOne.benefits,
        medias: exerciceOne.medias,
      },
      exerciceTwo: {
        name: exerciceTwo.name,
        description: exerciceTwo.description,
        target: exerciceTwo.target,
        benefits: exerciceTwo.benefits,
        medias: exerciceTwo.medias,
      },
      exerciceThree: {
        name: exerciceThree.name,
        description: exerciceThree.description,
        target: exerciceThree.target,
        benefits: exerciceThree.benefits,
        medias: exerciceThree.medias,
      },
      exerciceFour: {
        name: exerciceFour.name,
        description: exerciceFour.description,
        target: exerciceFour.target,
        benefits: exerciceFour.benefits,
        medias: exerciceFour.medias,
      },
      exerciceFive: {
        name: exerciceFive.name,
        description: exerciceFive.description,
        target: exerciceFive.target,
        benefits: exerciceFive.benefits,
        medias: exerciceFive.medias,
      },
    },
  });
  
  res.status(200).json(post);
};

// Modifier/Editer un post
module.exports.editPost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  // Si post non trouvé => message erreur
  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }

  // Post trouvé, on peut faire l'update
  const updatePost = await PostModel.findByIdAndUpdate(post, req.body, {
    new: true,
  });

  res.status(200).json(updatePost);
};

// Supprimer un post
module.exports.deletePost = async (req, res) => {
  const post = await PostModel.findById(req.params.id);

  // Si post non trouvé => message erreur
  if (!post) {
    res.status(400).json({ message: "Ce post n'existe pas" });
  }
  await post.deleteOne({ _id: post });
  res.status(200).json("Message supprimé " + req.params.id);
};
