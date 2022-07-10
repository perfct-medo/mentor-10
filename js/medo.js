let Features = document.querySelector(".Features");
let asidFeatures = document.querySelector("aside .Features");
let asidFeaturesarrup = document.querySelector("aside .Features .arrup");
let asidFeaturesarrdwn = document.querySelector("aside .Features .arrdwn");
let FeatParts = document.querySelector(".feat-parts");
let Company = document.querySelector(".Company");
let asideSectionsCompany = document.querySelector(" aside .sections .Company");
let compParts = document.querySelector(".comp-parts");
let asideSectionsComp = document.querySelector("aside .sections .comp-parts");
let arrup = document.querySelector(".arrup");
let arrupc = document.querySelector(" .arrupc");
let arrupcasidesections = document.querySelector(" aside .sections .arrupc");
let arrdwncasidesections = document.querySelector("aside .sections .arrdwnc");
let arrdwnc = document.querySelector(".arrdwnc");
let arrdwn = document.querySelector(".arrdwn");
let aside = document.querySelector("aside");
let asideSectionsFeatParts = document.querySelector(
    "aside .sections .feat-parts"
);
let bicon = document.querySelector(".bicon");
let biconSpanOne = document.querySelector(".bicon span:nth-child(1)");
let biconSpantwo = document.querySelector(".bicon span:nth-child(2)");
let biconSpantree = document.querySelector(".bicon span:last-child");
console.log();

bicon.addEventListener("click", function() {
    if (
        (biconSpanOne.classList.value === "top0") &
        (biconSpantwo.classList.value === "top10") &
        (biconSpantree.classList.value === "top20")
    ) {
        biconSpanOne.classList.remove("top0");
        biconSpantwo.classList.remove("top10");
        biconSpantree.classList.remove("top20");
        biconSpanOne.classList.add("top10");
        biconSpantree.classList.add("top10");
        biconSpantwo.classList.add("width0");

        biconSpanOne.classList.add("rotplas");
        biconSpantree.classList.add("rotmin");
    } else {
        biconSpantwo.classList.add("top10");
        biconSpanOne.classList.add("top0");
        biconSpantree.classList.add("top20");
        biconSpantwo.classList.remove("width0");
        biconSpanOne.classList.remove("top10");
        biconSpantree.classList.remove("top10");

        biconSpanOne.classList.remove("rotplas");
        biconSpantree.classList.remove("rotmin");
    }
    if (aside.classList.value === "diactive") {
        aside.classList.remove("diactive");
    } else {
        aside.classList.add("diactive");
    }
});

Features.addEventListener("click", function() {
    if (FeatParts.style.display === "none") {
        FeatParts.style.display = "block";
        arrup.style.display = "block";
        arrdwn.style.display = "none";
    } else {
        FeatParts.style.display = "none";
        arrup.style.display = "none";
        arrdwn.style.display = "block";
    }
});

Company.addEventListener("click", function() {
    if (compParts.style.display === "none") {
        compParts.style.display = "block";
        arrupc.style.display = "block";
        arrdwnc.style.display = "none";
    } else {
        compParts.style.display = "none";
        arrupc.style.display = "none";
        arrdwnc.style.display = "block";
    }
});

asideSectionsCompany.addEventListener("click", function() {
    if (asideSectionsComp.style.display === "none") {
        asideSectionsComp.style.display = "block";
        arrupcasidesections.style.display = "block";
        arrdwncasidesections.style.display = "none";
    } else {
        asideSectionsComp.style.display = "none";
        arrupcasidesections.style.display = "none";
        arrdwncasidesections.style.display = "block";
    }
});

Features.onclick = function() {
    arrdwn.classList.toggle("inActive");
};
Features.onclick = function() {};
console.log(asidFeatures);

// transform: rotate(225deg);

asidFeatures.addEventListener("click", function() {
    if (asideSectionsFeatParts.style.display === "none") {
        asideSectionsFeatParts.style.display = "block";
        asidFeaturesarrup.style.display = "block";
        asidFeaturesarrdwn.style.display = "none";
    } else {
        asideSectionsFeatParts.style.display = "none";
        asidFeaturesarrup.style.display = "none";
        asidFeaturesarrdwn.style.display = "block";
    }
});