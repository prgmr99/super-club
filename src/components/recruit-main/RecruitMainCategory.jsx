import React, { useState } from "react";
import { StCategory } from "./stRecruitMainCategory";
// import { StTechStack } from "./stRecruitMainTechStack";

const RecruitMainCategory = () => {
  const tabData = [
    {
      id: 1,
      title: "전체",
      content: [
        {
          image: "icon__tech-stack--javascript.svg",
          id: "id_1",
          title: "JavaScript",
        },
        {
          image: "icon__tech-stack--typescript.svg",
          id: "id_2",
          title: "TypeScript",
        },
        { image: "icon__tech-stack--react.svg", id: "id_3", title: "React" },
        { image: "icon__tech-stack--vue.svg", id: "id_4", title: "Vue" },
        { image: "icon__tech-stack--svelte.svg", id: "id_5", title: "Svelte" },
        { image: "icon__tech-stack--nextjs.svg", id: "id_6", title: "Nextjs" },
        { image: "icon__tech-stack--java.svg", id: "id_7", title: "Java" },
        { image: "icon__tech-stack--spring.svg", id: "id_8", title: "Spring" },
        { image: "icon__tech-stack--nodejs.svg", id: "id_9", title: "Nodejs" },
        { image: "icon__tech-stack--nestjs.svg", id: "id_10", title: "Nestjs" },
        { image: "icon__tech-stack--go.svg", id: "id_11", title: "Go" },
        {
          image: "icon__tech-stack--express.svg",
          id: "id_12",
          title: "Express",
        },
        { image: "icon__tech-stack--mysql.svg", id: "id_13", title: "MySQL" },
        {
          image: "icon__tech-stack--mongodb.svg",
          id: "id_14",
          title: "MongoDB",
        },
        { image: "icon__tech-stack--python.svg", id: "id_15", title: "Python" },
        { image: "icon__tech-stack--django.svg", id: "id_16", title: "Django" },
        { image: "icon__tech-stack--php.svg", id: "id_17", title: "php" },
        {
          image: "icon__tech-stack--graphql.svg",
          id: "id_18",
          title: "GraphQL",
        },
        {
          image: "icon__tech-stack--firebase.svg",
          id: "id_19",
          title: "Firebase",
        },
        {
          image: "icon__tech-stack--flutter.svg",
          id: "id_20",
          title: "Flutter",
        },
        { image: "icon__tech-stack--swift.svg", id: "id_21", title: "Swift" },
        { image: "icon__tech-stack--kotlin.svg", id: "id_22", title: "Kotlin" },
        {
          image: "icon__tech-stack--reactnative.svg",
          id: "id_23",
          title: "ReactNative",
        },
        { image: "icon__tech-stack--unity.svg", id: "id_24", title: "Unity" },
        { image: "icon__tech-stack--aws.svg", id: "id_25", title: "AWS" },
        {
          image: "icon__tech-stack--kubernetes.svg",
          id: "id_26",
          title: "Kubernetes",
        },
        { image: "icon__tech-stack--docker.svg", id: "id_27", title: "Docker" },
        { image: "icon__tech-stack--figma.svg", id: "id_28", title: "Figma" },
        { image: "icon__tech-stack--zeplin.svg", id: "id_29", title: "Zeplin" },
        { image: "icon__tech-stack--jest.svg", id: "id_30", title: "Jest" },
        { image: "icon__tech-stack--c.svg", id: "id_31", title: "C" },
      ],
    },
    {
      id: 2,
      title: "프론트엔드",
      content: [
        {
          image: "icon__tech-stack--javascript.svg",
          id: "id_1",
          title: "JavaScript",
        },
        {
          image: "icon__tech-stack--typescript.svg",
          id: "id_2",
          title: "TypeScript",
        },
        { image: "icon__tech-stack--react.svg", id: "id_3", title: "React" },
        { image: "icon__tech-stack--vue.svg", id: "id_4", title: "Vue" },
        { image: "icon__tech-stack--svelte.svg", id: "id_5", title: "Svelte" },
        { image: "icon__tech-stack--nextjs.svg", id: "id_6", title: "Nextjs" },
        {
          image: "icon__tech-stack--flutter.svg",
          id: "id_20",
          title: "Flutter",
        },
        { image: "icon__tech-stack--swift.svg", id: "id_21", title: "Swift" },
        {
          image: "icon__tech-stack--reactnative.svg",
          id: "id_23",
          title: "ReactNative",
        },
        { image: "icon__tech-stack--unity.svg", id: "id_24", title: "Unity" },
        { image: "icon__tech-stack--aws.svg", id: "id_25", title: "AWS" },
        { image: "icon__tech-stack--jest.svg", id: "id_30", title: "Jest" },
      ],
    },
    {
      id: 3,
      title: "백엔드",
      content: "백엔드 내용",
      content: [
        { image: "icon__tech-stack--java.svg", id: "id_7", title: "Java" },
        { image: "icon__tech-stack--spring.svg", id: "id_8", title: "Spring" },
        { image: "icon__tech-stack--nodejs.svg", id: "id_9", title: "Nodejs" },
        { image: "icon__tech-stack--nestjs.svg", id: "id_10", title: "Nestjs" },
        { image: "icon__tech-stack--go.svg", id: "id_11", title: "Go" },
        {
          image: "icon__tech-stack--express.svg",
          id: "id_12",
          title: "Express",
        },
        { image: "icon__tech-stack--mysql.svg", id: "id_13", title: "MySQL" },
        {
          image: "icon__tech-stack--mongodb.svg",
          id: "id_14",
          title: "MongoDB",
        },
        { image: "icon__tech-stack--python.svg", id: "id_15", title: "Python" },
        { image: "icon__tech-stack--django.svg", id: "id_16", title: "Django" },
        { image: "icon__tech-stack--php.svg", id: "id_17", title: "php" },
        {
          image: "icon__tech-stack--graphql.svg",
          id: "id_18",
          title: "GraphQL",
        },
        {
          image: "icon__tech-stack--firebase.svg",
          id: "id_19",
          title: "Firebase",
        },

        { image: "icon__tech-stack--kotlin.svg", id: "id_22", title: "Kotlin" },
        { image: "icon__tech-stack--aws.svg", id: "id_25", title: "AWS" },
        {
          image: "icon__tech-stack--kubernetes.svg",
          id: "id_26",
          title: "Kubernetes",
        },
        { image: "icon__tech-stack--docker.svg", id: "id_27", title: "Docker" },
        { image: "icon__tech-stack--c.svg", id: "id_31", title: "C" },
      ],
    },
    {
      id: 4,
      title: "디자이너",
      content: [
        { image: "icon__tech-stack--figma.svg", id: "id_28", title: "Figma" },
        { image: "icon__tech-stack--zeplin.svg", id: "id_29", title: "Zeplin" },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);
  const [clickCount, setClickCount] = useState(0);
  console.log(clickCount);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleTechClick = (techId) => {
    if (clickCount >= 5) {
      return;
    }

    setClickCount((prevCount) => prevCount + 1);
    console.log(setClickCount);
  };

  const getActiveTabContent = () => {
    const activeTabData = tabData.find((tab) => tab.id === activeTab);
    return activeTabData ? activeTabData.content : [];
  };

  return (
    <StCategory>
      <ul className="position_tab_menu">
        {tabData.map((tab) => (
          <li
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            style={{
              borderBottom:
                activeTab === tab.id
                  ? "4px solid #000"
                  : "4px solid transparent",
              color: activeTab === tab.id ? "#000" : "#b8b8b8",
            }}
          >
            {tab.title}
          </li>
        ))}
      </ul>
      <div className="position_tech_stack_wrapper">
        <ul>
          {getActiveTabContent().map((item, index) => (
            <li key={index} onClick={() => handleTechClick(item.id)}>
              <img src={item.image} alt={item.title} />
              <span> {item.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </StCategory>
  );
};

export default RecruitMainCategory;
