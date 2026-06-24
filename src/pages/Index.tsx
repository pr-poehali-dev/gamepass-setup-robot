import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const ROBUX_IMG = 'https://cdn.poehali.dev/projects/3e69c204-f457-43e5-bb04-42488e64ec34/files/754b58d9-f84d-4b9b-adac-6175f611a270.jpg';

const PRICE_PER_ROBUX = 1;

const PACKS = [
  { amount: 100, tag: '' },
  { amount: 500, tag: '' },
  { amount: 1000, tag: 'ХИТ' },
  { amount: 2500, tag: 'ВЫГОДНО' },
  { amount: 5000, tag: '' },
  { amount: 10000, tag: 'МАКС' },
];

const Index = () => {
  const [robux, setRobux] = useState(1000);
  const [open, setOpen] = useState(false);
  const [nick, setNick] = useState('');

  const price = Math.round(robux * PRICE_PER_ROBUX);
  const fmt = (n: number) => n.toLocaleString('ru-RU');

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary grid place-items-center neon-border">
              <Icon name="Gem" className="text-primary-foreground" size={20} />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider">RbxStore<span className="text-accent">.gg</span></span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1"><Icon name="ShieldCheck" size={16} className="text-accent" /> Гарантия</span>
            <span className="flex items-center gap-1"><Icon name="Zap" size={16} className="text-accent" /> Моментально</span>
            <span className="flex items-center gap-1"><Icon name="Headset" size={16} className="text-accent" /> 24/7</span>
          </div>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold">
            <Icon name="User" size={16} className="mr-1" /> Кабинет
          </Button>
        </div>
      </header>

      {/* HERO + CALCULATOR */}
      <section className="relative overflow-hidden grid-bg">
        <div className="container py-14 md:py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="animate-float-up">
            <Badge className="bg-secondary text-accent border-0 mb-5">МАГАЗИН РОБУКСОВ №1</Badge>
            <h1 className="font-display text-5xl md:text-6xl font-bold leading-[0.95] mb-5">
              КУПИ <span className="text-primary text-glow">РОБУКСЫ</span> ВЫГОДНО
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-md">
              Выбери нужное количество — 1 ₽ = 1 робукс. Доставка через геймпасс за 5 дней.
            </p>
            <div className="flex gap-8">
              {[['1 ₽', '= 1 робукс'], ['5 дней', 'ожидание'], ['через', 'геймпасс']].map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-3xl font-bold text-accent">{v}</div>
                  <div className="text-sm text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-2 rounded-xl bg-secondary/60 px-4 py-3 max-w-md">
              <Icon name="Clock" size={18} className="text-accent mt-0.5 shrink-0" />
              <p className="text-sm text-muted-foreground">Робуксы начисляются через геймпасс — <span className="text-foreground font-medium">ожидание до 5 дней</span> после оплаты.</p>
            </div>
          </div>

          {/* CALCULATOR */}
          <Card className="relative p-7 md:p-8 bg-card border-border neon-border animate-float-up" style={{ animationDelay: '0.1s' }}>
            <div className="absolute -inset-3 bg-primary/10 blur-3xl rounded-full -z-10" />
            <div className="flex items-center gap-3 mb-6">
              <img src={ROBUX_IMG} alt="Robux" className="w-14 h-14 rounded-xl object-cover" />
              <div>
                <h2 className="font-display text-2xl font-bold">Калькулятор робуксов</h2>
                <p className="text-sm text-muted-foreground">Двигай ползунок или введи число</p>
              </div>
            </div>

            {/* AMOUNT DISPLAY */}
            <div className="rounded-xl bg-secondary p-5 mb-5 text-center">
              <div className="text-sm text-muted-foreground mb-1">Количество робуксов</div>
              <div className="flex items-center justify-center gap-2">
                <Icon name="Gem" size={28} className="text-accent" />
                <Input
                  type="number"
                  value={robux}
                  min={50}
                  max={10000}
                  onChange={(e) => setRobux(Math.min(10000, Math.max(0, Number(e.target.value) || 0)))}
                  className="w-40 text-center font-display text-4xl font-bold bg-transparent border-0 focus-visible:ring-0 h-auto p-0"
                />
              </div>
            </div>

            {/* SLIDER */}
            <Slider
              value={[robux]}
              min={50}
              max={10000}
              step={50}
              onValueChange={(v) => setRobux(v[0])}
              className="mb-3"
            />
            <div className="flex justify-between text-xs text-muted-foreground mb-6">
              <span>50</span><span>10 000</span>
            </div>

            {/* QUICK PACKS */}
            <div className="grid grid-cols-3 gap-2 mb-6">
              {PACKS.map((p) => (
                <button
                  key={p.amount}
                  onClick={() => setRobux(p.amount)}
                  className={`relative rounded-lg py-2.5 text-sm font-semibold transition-all ${robux === p.amount ? 'bg-primary text-primary-foreground neon-border' : 'bg-secondary text-foreground hover:bg-secondary/70'}`}
                >
                  {p.tag && <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] bg-accent text-accent-foreground px-1.5 rounded-full">{p.tag}</span>}
                  {fmt(p.amount)}
                </button>
              ))}
            </div>

            {/* PRICE */}
            <div className="flex items-center justify-between rounded-xl bg-accent/10 px-5 py-4 mb-5">
              <span className="text-muted-foreground">К оплате</span>
              <span className="font-display text-3xl font-bold text-accent">{fmt(price)} ₽</span>
            </div>

            <Button size="lg" disabled={robux < 50} onClick={() => setOpen(true)} className="w-full bg-primary hover:bg-primary/90 font-semibold neon-border text-base">
              <Icon name="ShoppingCart" size={18} className="mr-2" /> Купить за {fmt(price)} ₽
            </Button>
          </Card>
        </div>
      </section>

      {/* FEATURES */}
      <section className="container py-12 grid sm:grid-cols-3 gap-5">
        {[
          { icon: 'Clock', t: 'Доставка 5 дней', d: 'Робуксы зачисляются через геймпасс до 5 дней' },
          { icon: 'ShieldCheck', t: 'Безопасно', d: 'Полная гарантия и защита каждой покупки' },
          { icon: 'Wallet', t: 'Любая оплата', d: 'Карты, СБП, электронные кошельки' },
        ].map((f, i) => (
          <Card key={f.t} className="p-6 bg-card border-border hover:border-primary transition-colors animate-float-up" style={{ animationDelay: `${i * 0.06}s` }}>
            <div className="w-12 h-12 rounded-xl bg-secondary grid place-items-center text-accent mb-4">
              <Icon name={f.icon} size={22} />
            </div>
            <h3 className="font-display text-xl font-semibold mb-1">{f.t}</h3>
            <p className="text-sm text-muted-foreground">{f.d}</p>
          </Card>
        ))}
      </section>

      {/* HOW IT WORKS */}
      <section className="container py-12">
        <h2 className="font-display text-4xl font-bold mb-10 text-center">КАК ЭТО РАБОТАЕТ</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {[
            { n: '01', t: 'Выбери сумму', d: 'Укажи количество робуксов в калькуляторе' },
            { n: '02', t: 'Оплати', d: 'Удобным для тебя способом онлайн' },
            { n: '03', t: 'Получи робуксы', d: 'Зачисление через геймпасс — ожидание до 5 дней' },
          ].map((s, i) => (
            <div key={s.n} className="relative animate-float-up" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="font-display text-6xl font-bold text-primary/30 mb-2">{s.n}</div>
              <h3 className="font-display text-xl font-semibold mb-1">{s.t}</h3>
              <p className="text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CHECKOUT DIALOG */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="bg-card border-border neon-border">
          <DialogHeader>
            <div className="w-14 h-14 rounded-2xl bg-accent grid place-items-center mb-3 mx-auto accent-glow">
              <Icon name="Gem" className="text-accent-foreground" size={28} />
            </div>
            <DialogTitle className="font-display text-2xl text-center">Оформление покупки</DialogTitle>
            <DialogDescription className="text-center">
              {fmt(robux)} робуксов за <span className="text-accent font-semibold">{fmt(price)} ₽</span>
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-3 py-2">
            <div>
              <label className="text-sm text-muted-foreground mb-1.5 block">Никнейм в игре</label>
              <Input value={nick} onChange={(e) => setNick(e.target.value)} placeholder="Введи свой ник" className="bg-secondary border-border" />
            </div>
            <div className="flex items-center justify-between rounded-lg bg-secondary px-4 py-3">
              <span className="text-muted-foreground text-sm">Итого к оплате</span>
              <span className="font-display text-2xl font-bold text-accent">{fmt(price)} ₽</span>
            </div>
          </div>
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold neon-border">
            <Icon name="CreditCard" size={18} className="mr-2" /> Перейти к оплате
          </Button>
        </DialogContent>
      </Dialog>

      {/* FOOTER */}
      <footer className="border-t border-border mt-10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-lg font-bold text-foreground">RbxStore<span className="text-accent">.gg</span></span>
          <span>© 2026 RbxStore.gg · Магазин робуксов</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;