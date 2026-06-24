import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';

const HERO_IMG = 'https://cdn.poehali.dev/projects/3e69c204-f457-43e5-bb04-42488e64ec34/files/7b6b5f9c-59af-4d76-a6ea-6209a6ef70f1.jpg';
const PASS_IMG = 'https://cdn.poehali.dev/projects/3e69c204-f457-43e5-bb04-42488e64ec34/files/ad9d641d-ecf0-42c4-bcec-82a9f0689852.jpg';

const NAV = [
  { id: 'home', label: 'Главная', icon: 'Home' },
  { id: 'catalog', label: 'Каталог', icon: 'Gamepad2' },
  { id: 'profile', label: 'Профиль', icon: 'User' },
  { id: 'history', label: 'История', icon: 'Receipt' },
];

const SERVICES = [
  { title: 'Game Pass Ultimate', desc: 'Доступ к 400+ играм и онлайну', price: '599 ₽/мес', tag: 'ХИТ', accent: true, icon: 'Crown' },
  { title: 'Прокачка аккаунта', desc: 'Буст рейтинга и достижений', price: '1 200 ₽', tag: 'BOOST', icon: 'TrendingUp' },
  { title: 'Игровая валюта', desc: 'Робаксы и внутриигровые монеты', price: 'от 250 ₽', tag: '', icon: 'Coins' },
  { title: 'Настройка геймпасса', desc: 'Подключим и настроим на твоём плейсе', price: '450 ₽', tag: 'НОВОЕ', icon: 'Settings' },
  { title: 'VIP-статус', desc: 'Приоритет и эксклюзивные бонусы', price: '890 ₽', tag: '', icon: 'Star' },
  { title: 'Кастомизация', desc: 'Уникальные скины и оформление', price: 'от 300 ₽', tag: '', icon: 'Palette' },
];

const HISTORY = [
  { name: 'Game Pass Ultimate', date: '12 июня 2026', status: 'Активно', amount: '599 ₽', ok: true },
  { name: 'Прокачка аккаунта', date: '5 июня 2026', status: 'Завершено', amount: '1 200 ₽', ok: true },
  { name: 'Игровая валюта', date: '28 мая 2026', status: 'Завершено', amount: '250 ₽', ok: true },
];

const Index = () => {
  const [tab, setTab] = useState('home');
  const [purchaseOpen, setPurchaseOpen] = useState(false);
  const [purchased, setPurchased] = useState<string>('');

  const buy = (name: string) => {
    setPurchased(name);
    setPurchaseOpen(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* HEADER */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-primary grid place-items-center neon-border">
              <Icon name="Gamepad2" className="text-primary-foreground" size={20} />
            </div>
            <span className="font-display text-2xl font-bold tracking-wider">ROBAY<span className="text-accent"> GG</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => setTab(n.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${tab === n.id ? 'bg-secondary text-accent' : 'text-muted-foreground hover:text-foreground'}`}
              >
                <Icon name={n.icon} size={16} />
                {n.label}
              </button>
            ))}
          </nav>
          <Button className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold animate-pulse-glow">
            <Icon name="Zap" size={16} className="mr-1" /> Войти
          </Button>
        </div>
      </header>

      {/* MOBILE NAV */}
      <div className="md:hidden flex border-b border-border bg-background/80 backdrop-blur">
        {NAV.map((n) => (
          <button
            key={n.id}
            onClick={() => setTab(n.id)}
            className={`flex-1 flex flex-col items-center gap-1 py-2 text-xs ${tab === n.id ? 'text-accent' : 'text-muted-foreground'}`}
          >
            <Icon name={n.icon} size={18} />
            {n.label}
          </button>
        ))}
      </div>

      {/* HOME */}
      {tab === 'home' && (
        <section className="relative overflow-hidden grid-bg">
          <div className="container py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-float-up">
              <Badge className="bg-secondary text-accent border-0 mb-5">#1 ИГРОВАЯ ПЛАТФОРМА</Badge>
              <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.95] mb-6">
                ПРОКАЧАЙ СВОЙ <span className="text-primary text-glow">ИГРОВОЙ</span> ОПЫТ
              </h1>
              <p className="text-muted-foreground text-lg mb-8 max-w-md">
                Каталог услуг, подписки Game Pass и мгновенная настройка геймпасса прямо на твоём плейсе.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" onClick={() => setTab('catalog')} className="bg-primary hover:bg-primary/90 font-semibold neon-border">
                  <Icon name="Rocket" size={18} className="mr-2" /> Открыть каталог
                </Button>
                <Button size="lg" variant="outline" onClick={() => buy('Game Pass Ultimate')} className="border-accent text-accent hover:bg-accent/10">
                  <Icon name="Crown" size={18} className="mr-2" /> Купить Game Pass
                </Button>
              </div>
              <div className="flex gap-8 mt-12">
                {[['50K+', 'игроков'], ['400+', 'игр'], ['24/7', 'поддержка']].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-3xl font-bold text-accent">{v}</div>
                    <div className="text-sm text-muted-foreground">{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-float-up" style={{ animationDelay: '0.15s' }}>
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full" />
              <img src={HERO_IMG} alt="Gaming" className="relative rounded-2xl neon-border w-full object-cover aspect-square" />
            </div>
          </div>
        </section>
      )}

      {/* CATALOG */}
      {tab === 'catalog' && (
        <section className="container py-16">
          <div className="mb-10">
            <h2 className="font-display text-4xl font-bold mb-2">КАТАЛОГ УСЛУГ И ИГР</h2>
            <p className="text-muted-foreground">Выбери услугу — настройка займёт пару минут</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Card
                key={s.title}
                className={`group p-6 bg-card border-border hover:border-primary transition-all animate-float-up ${s.accent ? 'neon-border' : ''}`}
                style={{ animationDelay: `${i * 0.06}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl grid place-items-center ${s.accent ? 'bg-accent text-accent-foreground' : 'bg-secondary text-accent'}`}>
                    <Icon name={s.icon} size={22} />
                  </div>
                  {s.tag && <Badge className="bg-primary text-primary-foreground border-0">{s.tag}</Badge>}
                </div>
                <h3 className="font-display text-xl font-semibold mb-1">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{s.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold text-accent">{s.price}</span>
                  <Button size="sm" onClick={() => buy(s.title)} className="bg-primary hover:bg-primary/90 font-semibold">
                    Купить
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* PROFILE */}
      {tab === 'profile' && (
        <section className="container py-16 max-w-3xl">
          <h2 className="font-display text-4xl font-bold mb-10">ПРОФИЛЬ И АККАУНТ</h2>
          <Card className="p-8 bg-card border-border neon-border mb-6 animate-float-up">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 rounded-2xl bg-primary grid place-items-center font-display text-3xl font-bold">PX</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-2xl font-bold">ProGamer_X</h3>
                  <Badge className="bg-accent text-accent-foreground border-0">VIP</Badge>
                </div>
                <p className="text-muted-foreground">player@robay.gg · с 2024 года</p>
              </div>
            </div>
          </Card>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: 'CreditCard', label: 'Способы оплаты', val: '2 карты' },
              { icon: 'Shield', label: 'Безопасность', val: 'Включена 2FA' },
              { icon: 'Bell', label: 'Уведомления', val: 'Включены' },
              { icon: 'Gamepad2', label: 'Привязанный плейс', val: 'place-1024' },
            ].map((it, i) => (
              <Card key={it.label} className="p-5 bg-card border-border flex items-center justify-between hover:border-primary transition-colors animate-float-up" style={{ animationDelay: `${i * 0.05}s` }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-secondary grid place-items-center text-accent">
                    <Icon name={it.icon} size={18} />
                  </div>
                  <div>
                    <div className="font-medium">{it.label}</div>
                    <div className="text-sm text-muted-foreground">{it.val}</div>
                  </div>
                </div>
                <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* HISTORY */}
      {tab === 'history' && (
        <section className="container py-16 max-w-3xl">
          <h2 className="font-display text-4xl font-bold mb-10">ИСТОРИЯ ПОКУПОК</h2>
          <div className="space-y-3">
            {HISTORY.map((h, i) => (
              <Card key={i} className="p-5 bg-card border-border flex items-center justify-between hover:border-primary transition-colors animate-float-up" style={{ animationDelay: `${i * 0.06}s` }}>
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-lg bg-secondary grid place-items-center text-accent">
                    <Icon name="Receipt" size={20} />
                  </div>
                  <div>
                    <div className="font-medium">{h.name}</div>
                    <div className="text-sm text-muted-foreground">{h.date}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-display font-bold text-accent">{h.amount}</div>
                  <Badge className="bg-accent/15 text-accent border-0 text-xs">{h.status}</Badge>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* PURCHASE DIALOG */}
      <Dialog open={purchaseOpen} onOpenChange={setPurchaseOpen}>
        <DialogContent className="bg-card border-border neon-border">
          <DialogHeader>
            <div className="w-14 h-14 rounded-2xl bg-accent grid place-items-center mb-3 mx-auto accent-glow">
              <Icon name="CheckCheck" className="text-accent-foreground" size={28} />
            </div>
            <DialogTitle className="font-display text-2xl text-center">Покупка оформлена!</DialogTitle>
            <DialogDescription className="text-center">
              «{purchased}» успешно добавлено в твой аккаунт.
            </DialogDescription>
          </DialogHeader>
          <img src={PASS_IMG} alt="Game Pass" className="rounded-xl w-full aspect-video object-cover my-2" />
          <p className="text-sm text-muted-foreground text-center">
            Чтобы активировать геймпасс — нужно настроить его на твоём плейсе.
          </p>
          <Button size="lg" className="w-full bg-primary hover:bg-primary/90 font-semibold neon-border">
            <Icon name="Settings" size={18} className="mr-2" /> Настроить геймпасс на плейсе
          </Button>
          <Button variant="ghost" onClick={() => setPurchaseOpen(false)} className="w-full text-muted-foreground">
            Позже
          </Button>
        </DialogContent>
      </Dialog>

      {/* FOOTER */}
      <footer className="border-t border-border mt-10">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-display text-lg font-bold text-foreground">ROBAY<span className="text-accent"> GG</span></span>
          <span>© 2026 Robay GG · Игровая платформа</span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
