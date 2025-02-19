import type { Page as PlaywrightPage, BrowserContext as PlaywrightContext, CDPSession } from "@playwright/test";
import { LLMClient } from "./llm/LLMClient";
import { ActOptions, ActResult, Stagehand } from "./index";
import { StagehandContext } from "./StagehandContext";
import { Page, defaultExtractSchema } from "../types/page";
import { ExtractOptions, ExtractResult, ObserveOptions, ObserveResult } from "../types/stagehand";
import { z } from "zod";
export declare class StagehandPage {
    private stagehand;
    private intPage;
    private intContext;
    private actHandler;
    private extractHandler;
    private observeHandler;
    private llmClient;
    private cdpClient;
    constructor(page: PlaywrightPage, stagehand: Stagehand, context: StagehandContext, llmClient: LLMClient, userProvidedInstructions?: string);
    init(): Promise<StagehandPage>;
    get page(): Page;
    get context(): PlaywrightContext;
    _waitForSettledDom(timeoutMs?: number): Promise<void>;
    startDomDebug(): Promise<void>;
    cleanupDomDebug(): Promise<void>;
    act(actionOrOptions: string | ActOptions): Promise<ActResult>;
    extract<T extends z.AnyZodObject = typeof defaultExtractSchema>(instructionOrOptions: string | ExtractOptions<T>): Promise<ExtractResult<T>>;
    observe(instructionOrOptions?: string | ObserveOptions): Promise<ObserveResult[]>;
    getCDPClient(): Promise<CDPSession>;
    sendCDP<T>(command: string, args?: Record<string, unknown>): Promise<T>;
    enableCDP(domain: string): Promise<void>;
    disableCDP(domain: string): Promise<void>;
}
