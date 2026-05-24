export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 px-6 py-6 text-center">
      <p className="text-xs text-muted-foreground/40">
        Киселев Дмитрий — {new Date().getFullYear()}
      </p>
    </footer>
  )
}
