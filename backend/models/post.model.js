const mongoose = require("mongoose");

const postSchema = mongoose.Schema(
  {
    routine : {
      exerciceOne: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          required: true,
        },
        benefits: {
          type: String,
          required: true,
        },
        medias: {
          type: String,
          required: true,
        }
      }
      ,

      exerciceTwo: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          required: true,
        },
        benefits: {
          type: String,
          required: true,
        },
        medias: {
          type: String,
          required: true,
        }
      },

      exerciceThree: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          required: true,
        },
        benefits: {
          type: String,
          required: true,
        },
        medias: {
          type: String,
          required: true,
        }
      },

      exerciceFour: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          required: true,
        },
        benefits: {
          type: String,
          required: true,
        },
        medias: {
          type: String,
          required: true,
        }
      },
      
      exerciceFive: {
        name: {
          type: String,
          required: true,
        },
        description: {
          type: String,
          required: true,
        },
        target: {
          type: String,
          required: true,
        },
        benefits: {
          type: String,
          required: true,
        },
        medias: {
          type: String,
          required: true,
        }
      },
    }
  }
);

module.exports = mongoose.model("post", postSchema);