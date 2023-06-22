/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "DR-NET: A Stacked Convolutional Classifier Framework for Detection of Diabetic Retinopathy",
    authors:
      "Sathiya Narayan Chakravarthy, Himanshu Singhal and Narasimha Yadav R. P.",
    conferences:
      "2019 International Joint Conference on Neural Networks (IJCNN)",
    researchYr: 2019,
    citebox: "popup1",
    image: "assets/images/research-page/DR-net.jpg",
    citation: {
      vancouver:
        "Chakravarthy, Sathiya Narayan, Himanshu Singhal, and Narasimha Yadav R.P. (2019). DR-NET: A Stacked Convolutional Classifier Framework for Detection of Diabetic Retinopathy. In: Proceedings of the 2019 International Joint Conference on Neural Networks. Budapest, Hungary.",
    },
    abstract:
      "https://ieeexplore.ieee.org/document/8852011",
    absbox: "absPopup1",
  },

  {
    title: "EPMS: A Framework for Large-Scale Patient Matching",
    authors:
      "Himanshu Singhal, Harish Ravi, Sathiya Narayan Chakravarthy, Prabavathy Balasundaram and Chitra Babu",
    conferences:
      "2019 IEEE 31st International Conference on Tools with Artificial Intelligence (ICTAI)",
    researchYr: 2019,
    citebox: "popup2",
    image: "assets/images/research-page/EPMS.jpg",
    citation: {
      vancouver:
        "Singhal, Himanshu et al. (2019). “EPMS: A framework for large-scale patient matching”. In: Proceedings of the 31st International Conference on Tools with Artificial Intelligence 2019. Portland, USA.",
    },
    abstract:
      "https://ieeexplore.ieee.org/document/8995221",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            LINK
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
