const images = [
  { src: "/images/00p-1.jpg", alt: "한양보리" },
  { src: "/images/01p-1.png", alt: "보리떡 다 드셨을 텐데" },
  { src: "/images/02p.jpg", alt: "보리에 대하여" },
  { src: "/images/03p-3.jpg", alt: "보리떡 프리미엄" },
  { src: "/images/04p_gif.gif", alt: "한양보리 소개" },
  { src: "/images/05p.jpg", alt: "Point 01 연구개발" },
  { src: "/images/06p.jpg", alt: "Point 02 저온 숙성 발효" },
  { src: "/images/07p.jpg", alt: "Point 03 특수공법 용기" },
  { src: "/images/08p-2.jpg", alt: "보리떡 제품 사진" },
  { src: "/images/11p_gif.gif", alt: "한양보리 특징" },
  { src: "/images/12p.jpg", alt: "락토 베지테리언" },
  { src: "/images/13p.jpg", alt: "고소함과 구수함의 차이" },
  { src: "/images/14p.jpg", alt: "구수함을 추구합니다" },
  { src: "/images/15p-1.png", alt: "구수함 비교" },
  { src: "/images/16p.jpg", alt: "보리를 먹어야 하는 5가지 이유" },
  { src: "/images/17p.jpg", alt: "이런분들께 추천드립니다" },
  { src: "/images/18p.jpg", alt: "더 맛있게 먹는 팁" },
  { src: "/images/19p_gif.gif", alt: "한양보리" },
  { src: "/images/20p.jpg", alt: "보관방법 및 조리법" },
  { src: "/images/20p-add-1.jpg", alt: "추가 안내" },
  { src: "/images/21p-4.png", alt: "포장 설명" },
  { src: "/images/22p-4.jpg", alt: "제품 상세정보" },
  { src: "/images/23p.jpg", alt: "이제 보리떡으로 시작해 보세요" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">
      {images.map((img) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={img.src}
          src={img.src}
          alt={img.alt}
          className="w-full max-w-[600px] h-auto block"
        />
      ))}
    </main>
  );
}
