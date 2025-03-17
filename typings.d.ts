export interface HomePost {
  _id: string;
  description: string;
  leftImage: {
    asset: {
      url: string;
    };
  };
  rightImage: {
    asset: {
      url: string;
    };
  };
  seminarImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
}

export interface AboutPost {
  _id: string;
  name: string;
  aboutText: [object];
  profilePicture: {
    asset: {
      url: string;
    };
  };
  backgroundText: [object];
}

export interface BlogPost {
  _id: string;
  name: string;
  blogText: [object];
  headerPicture: {
    asset: {
      url: string;
    };
  };
}

export interface TestimonialPost {
  _id: string;
  name: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
}

export interface BenefitsPost {
  _id: string;
  iconImage: {
    asset: {
      url: string;
    };
  };
  benefitsImage: {
    asset: {
      url: string;
    };
  };
  benefitsText: [object];
}

export interface ReikiWorkshopPost {
  _id: string;
  title: string;
  body: [object];
}

export interface ReikiTestimonialPost {
  _id: string;
  title: string;
  body: [object];
}

export interface ReikiPost {
  _id: string;
  title: string;
  body: [object];
  rightImage: {
    asset: {
      url: string;
    };
  };
}

export interface MeditationPost {
  _id: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  header: string;
  body: [object];
}

interface GallaryImagePost {
  _id: string;
  gallaryImages: object[];
  name: string;
  priority: number;
}

export interface CoachingPost {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  headerText: [object];
  themes: [object];
  format: [object];
  body: [object];
}

export interface GuidancePost {
  _id: string;
  title: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  secondaryImage: {
    asset: {
      url: string;
    };
  };
  tertiaryImage: {
    asset: {
      url: string;
    };
  };
  headerImage: {
    asset: {
      url: string;
    };
  };
  headerText: [object];
  body: [object];
}

export interface CoachingTestimonial {
  _id: string;
  name: string;
  body: [object];
}

export interface FitnessPost {
  _id: string;
  name: string;
  headerImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
  subtitle: string;
  subBody: [object];
  footerImage: {
    asset: {
      url: string;
    };
  };
}
export interface LeelaPost {
  _id: string;
  title: string;
  backgroundImage: {
    asset: {
      url: string;
    };
  };
  body: [object];
  certImage: {
    asset: {
      url: string;
    };
  };
  firstTestimonial: [object];
}

export interface LeelaTestimonials {
  _id: string;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
  body: [object];
}

interface RecipePost {
  _id: string;
  name: string;
  recipeImage: {
    asset: {
      url: string;
    };
  };
  recipe: [object];
}
