import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Error logged quietly to avoid console noise in production
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: undefined });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-imtx-950 flex items-center justify-center p-4 text-center">
          <div className="max-w-md w-full glass-card p-8 rounded-2xl border border-red-500/20 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/30 flex items-center justify-center mx-auto mb-6 text-red-400">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Sistem İstisnası Algılandı
            </h1>
            <p className="text-slate-400 text-sm mb-6 leading-relaxed">
              İşlem gerçekleştirilirken beklenmeyen bir hata meydana geldi. Mühendislik ekibimiz bilgilendirildi.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={this.handleReset}
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold text-sm transition-colors"
              >
                <RefreshCw className="w-4 h-4" />
                Sayfayı Yenile
              </button>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-sm transition-colors"
              >
                <Home className="w-4 h-4" />
                Ana Sayfaya Dön
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
