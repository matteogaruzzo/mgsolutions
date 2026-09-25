import { Eyebrow, Heading, Reveal, Text } from '@/components/agria/ui';

// Etichetta (facoltativa) + titolo (+ introduzione) in apertura di una sezione.
export default function SectionIntro({ eyebrow, title, intro, titleId }) {
  return (
    <Reveal className="flex flex-col gap-4">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading level="h2" id={titleId}>
        {title}
      </Heading>
      {intro && (
        <Text size="lg" muted>
          {intro}
        </Text>
      )}
    </Reveal>
  );
}
