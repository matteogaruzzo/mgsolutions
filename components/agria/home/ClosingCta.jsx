import Link from 'next/link';
import { Button, Container, Heading, Reveal, Section, Text } from '@/components/agria/ui';
import { closing } from '@/content/agria/home';

// CTA finale: blocco scuro su sezione bianca. Di default il copy della
// homepage; le pagine servizi passano solo titolo e CTA (text={null}).
export default function ClosingCta({ title = closing.title, text = closing.text, cta = closing.cta }) {
  return (
    <Section background="white" spacing="compact" aria-labelledby="home-chiusura-title">
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
              {title}
            </Heading>
            {text && (
              <Text onDark muted className="mx-auto mt-4">
                {text}
              </Text>
            )}
            <Button as={Link} href={cta.href} variant="bright" className="mt-8">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
