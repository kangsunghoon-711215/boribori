import Image from "next/image";

const images = [
  { src: "/images/01p.jpg", alt: "보리떡 다 드셨을 텐데", w: 750, h: 1334 },
  { src: "/images/02p.jpg", alt: "보리에 대하여", w: 750, h: 1334 },
  { src: "/images/03p-2.jpg", alt: "보리떡 프리미엄", w: 750, h: 1334 },
  { src: "/images/04p_gif.gif", alt: "한양보리 소개", w: 750, h: 1334 },
  { src: "/images/05p.jpg", alt: "Point 01 연구개발", w: 750, h: 1334 },
  { src: "/images/06p.jpg", alt: "Point 02 저온 숙성 발효", w: 750, h: 1334 },
  { src: "/images/07p.jpg", alt: "Point 03 특수공법 용기", w: 750, h: 1334 },
  { src: "/images/08p.jpg", alt: "보리떡 제품 사진", w: 1200, h: 800 },
  { src: "/images/11p_gif.gif", alt: "한양보리 특징", w: 750, h: 1334 },
  { src: "/images/12p.jpg", alt: "락토 베지테리언", w: 750, h: 1334 },
  { src: "/images/13p.jpg", alt: "고소함과 구수함의 차이", w: 750, h: 1334 },
  { src: "/images/14p.jpg", alt: "구수함을 추구합니다", w: 750, h: 1334 },
  { src: "/images/15p.jpg", alt: "구수함 비교", w: 750, h: 1334 },
  { src: "/images/16p.jpg", alt: "보리를 먹어야 하는 5가지 이유", w: 750, h: 1334 },
  { src: "/images/17p.jpg", alt: "이런분들께 추천드립니다", w: 750, h: 1334 },
  { src: "/images/18p.jpg", alt: "더 맛있게 먹는 팁", w: 750, h: 1334 },
  { src: "/images/19p_gif.gif", alt: "한양보리", w: 750, h: 1334 },
  { src: "/images/20p.jpg", alt: "보관방법 및 조리법", w: 750, h: 1334 },
  { src: "/images/21p-1.jpg", alt: "포장 설명", w: 750, h: 1334 },
  { src: "/images/22p-4.jpg", alt: "제품 상세정보", w: 750, h: 1334 },
  { src: "/images/23p.jpg", alt: "이제 보리떡으로 시작해 보세요", w: 750, h: 1334 },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center bg-white">
      {images.map((img, i) =>
        img.src.endsWith(".gif") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            className="w-full max-w-[600px] h-auto block"
          />
        ) : (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            className="w-full max-w-[600px] h-auto"
            priority={i < 3}
            style={{ display: "block" }}
          />
        )
      )}
    </main>
  );
}
