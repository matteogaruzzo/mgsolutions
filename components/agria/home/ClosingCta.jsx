import Link from 'next/link';
import { Button, Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { closing } from '@/content/agria/home';

export default function ClosingCta() {
  return (
    <Section background="white" spacingTop="none" spacingBottom="compact" aria-labelledby="home-chiusura-title">
      <Container>
        <Reveal className="relative overflow-hidden rounded-[30px] bg-agria-ink px-6 py-[clamp(40px,6vw,76px)] text-center sm:px-[clamp(40px,6vw,76px)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-[-20%] bottom-[-70%] h-full"
            style={{
              background:
                'radial-gradient(50% 60% at 50% 100%, rgb(var(--agria-green-bright) / 0.2), transparent 70%)',
            }}
          />
          <div className="relative flex flex-col items-center">
            <Heading level="h2" id="home-chiusura-title" onDark>
              {closing.title}
            </Heading>
            <Text onDark muted className="mx-auto mt-4">
              {closing.text}
            </Text>
            <Button as={Link} href={closing.cta.href} variant="bright" className="mt-8">
              {closing.cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
